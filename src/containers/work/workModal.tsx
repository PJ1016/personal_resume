import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  Controller,
  useFieldArray,
  type ControllerFieldState,
  type ControllerRenderProps,
  type UseFormReturn,
  type UseFormStateReturn,
} from "react-hook-form";
import type { IWorkExperienceFormHook } from ".";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LoadingButton } from "@mui/lab";
import { GenerativeModel } from "@google/generative-ai";
import ReactQuill from "react-quill";
interface IWorkModal {
  open: boolean;
  handleClose: () => void;
  onSubmit: any;
  workExperienceFormHook: UseFormReturn<
    IWorkExperienceFormHook,
    any,
    undefined
  >;
}
const WorkModal = ({
  open,
  handleClose,
  onSubmit,
  workExperienceFormHook,
}: IWorkModal) => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = workExperienceFormHook;
  const geminiSecretKey = process.env.REACT_APP_GEMINI_SECRET_KEY;
  const [isLoading, setIsLoading] = useState<boolean>();
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "workExperience",
  });
  const handleRemoveCard = (id: string) => {
    const index = fields.findIndex((item) => item.id === id);
    remove(index);
  };
  const generateContent = async (index: number) => {
    const client = new GenerativeModel(geminiSecretKey as string, {
      model: "gemini-1.0-pro",
    });
    try {
      setIsLoading(true);
      const result = await client.generateContent(
        `Refactor the following points into a concise list, with each point on a new line without any bullets, numbers, or hyphens: ${watch(
          `workExperience.${index}.additionalContent`
        )}`
      );
      setValue(
        `workExperience.${index}.additionalContent`,
        result.response.candidates?.[0].content.parts[0].text as string
      );
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Update Personal Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {fields.length > 0
            ? "Please enter all the fields below"
            : "Click on add Work Experience"}
        </DialogContentText>
        <form onSubmit={onSubmit}>
          {fields.map((item, index) => (
            <Paper
              sx={{ padding: "1rem", marginTop: "1rem" }}
              key={`${item.id}.${index}`}
              elevation={5}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} marginTop={1}>
                  <TextField
                    autoFocus
                    {...register(`workExperience.${index}.companyName`, {
                      required: {
                        value: true,
                        message: "Company name is required",
                      },
                    })}
                    size="small"
                    label="Company Name"
                    error={Boolean(
                      errors?.workExperience?.[index]?.companyName
                    )}
                    helperText={
                      errors?.workExperience?.[index]?.companyName?.message
                    }
                    fullWidth
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    name={`workExperience.${index}.startDate`}
                    control={control}
                    render={({
                      field: { ref, onChange, value, ...field },
                      fieldState: { error },
                    }: {
                      field: ControllerRenderProps<
                        IWorkExperienceFormHook,
                        `workExperience.${number}.startDate`
                      >;
                      fieldState: ControllerFieldState;
                      formState: UseFormStateReturn<IWorkExperienceFormHook>;
                    }) => (
                      <DatePicker
                        {...field}
                        onChange={(newValue) =>
                          onChange(
                            dayjs(newValue).format("MMMM YYYY").toUpperCase()
                          )
                        }
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
                    name={`workExperience.${index}.endDate`}
                    control={control}
                    render={({
                      field: { ref, onChange, value, ...field },
                      fieldState: { error },
                    }: {
                      field: ControllerRenderProps<
                        IWorkExperienceFormHook,
                        `workExperience.${number}.endDate`
                      >;
                      fieldState: ControllerFieldState;
                      formState: UseFormStateReturn<IWorkExperienceFormHook>;
                    }) => (
                      <DatePicker
                        {...field}
                        onChange={(newValue) =>
                          onChange(
                            dayjs(newValue).format("MMMM YYYY").toUpperCase()
                          )
                        }
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
                <Grid item xs={12}>
                  <Controller
                    name={`workExperience.${index}.additionalContent`}
                    control={control}
                    render={({ field: { value, onChange } }: any) => (
                      <ReactQuill
                        theme="snow"
                        value={value}
                        preserveWhitespace
                        onChange={(value) => onChange(value)}
                        placeholder="Please add your work experience content"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <LoadingButton
                    onClick={() => generateContent(index)}
                    loading={isLoading}
                    variant="contained"
                  >
                    Generate WE
                  </LoadingButton>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    onClick={() => handleRemoveCard(item.id)}
                  >
                    Remove Work Experience
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            append({
              id: Math.random().toString(),
              companyName: "",
              startDate: "",
              endDate: "",
              additionalContent: "",
            });
          }}
          variant="contained"
        >
          Add Work Experience
        </Button>
        <Button type="submit" onClick={onSubmit} variant="contained">
          Update details
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkModal;
