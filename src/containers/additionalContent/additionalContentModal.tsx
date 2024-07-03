import React, { useState } from "react";
import {
  Controller,
  type ControllerFieldState,
  type ControllerRenderProps,
  type UseFormReturn,
  type UseFormStateReturn,
} from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import type { IContent } from "../../store/slices/additionalContentSlice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import ReactQuill from "react-quill";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { GenerativeModel } from "@google/generative-ai";
interface IAdditionalContentModal {
  open: boolean;
  handleClose: (close: boolean) => void;
  onSubmit: any;
  additionalFormHook: UseFormReturn<IContent, any, undefined>;
}
const AdditionalContentModal = ({
  open,
  handleClose,
  onSubmit,
  additionalFormHook,
}: IAdditionalContentModal) => {
  const { register, control, setValue, watch } = additionalFormHook;
  const [isLoading, setIsLoading] = useState<boolean>();
  const geminiSecretKey = process.env.REACT_APP_GEMINI_SECRET_KEY;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const client = new GenerativeModel(geminiSecretKey as string, {
      model: "gemini-1.5-pro",
    });
    try {
      setIsLoading(true);
      const result = await client.generateContent(
        `key skills for the job description "${watch("jobDescription")}" return response as list of tags like <ul> and each row has sub header  in bold : followed by skills `
      );
      setValue(
        "content",
        (result.response.candidates &&
          result.response.candidates[0].content.parts[0].text) as string
      );
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Get Summary Details</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter all the fields below</DialogContentText>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("title")}
                label="Title"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("subHeader", {})}
                label="Sub-title"
                multiline
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                {...register("jobDescription", {})}
                label="Sub-title"
                multiline
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="startDate"
                control={control}
                render={({
                  field: { ref, onChange, value, ...field },
                  fieldState: { error },
                }: {
                  field: ControllerRenderProps<IContent, `startDate`>;
                  fieldState: ControllerFieldState;
                  formState: UseFormStateReturn<IContent>;
                }) => (
                  <DatePicker
                    {...field}
                    onChange={(newValue) =>
                      onChange(dayjs(newValue).format("MMM YYYY"))
                    }
                    value={value ? dayjs(value, "MMM YYYY") : null}
                    label="Start Date"
                    views={["month", "year"]}
                    format="MMM-YYYY"
                    slotProps={{
                      textField: { variant: "standard", size: "small" },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="endDate"
                control={control}
                render={({
                  field: { ref, onChange, value, ...field },
                  fieldState: { error },
                }: {
                  field: ControllerRenderProps<IContent, `endDate`>;
                  fieldState: ControllerFieldState;
                  formState: UseFormStateReturn<IContent>;
                }) => (
                  <DatePicker
                    {...field}
                    onChange={(newValue) =>
                      onChange(dayjs(newValue).format("MMM YYYY"))
                    }
                    value={value ? dayjs(value, "MMM YYYY") : null}
                    label="End Date"
                    views={["month", "year"]}
                    format="MMM-YYYY"
                    slotProps={{
                      textField: { variant: "standard", size: "small" },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={12} minHeight="200px">
              <Controller
                name="content"
                control={control}
                render={({ field: { value, onChange } }: any) => (
                  <ReactQuill
                    theme="snow"
                    value={value}
                    preserveWhitespace
                    onChange={(value) => onChange(value)}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <LoadingButton
                size="small"
                onClick={handleSubmit}
                loading={isLoading}
                variant="contained"
              >
                Generate Summary
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={onSubmit}>
          Update Summary
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdditionalContentModal;
