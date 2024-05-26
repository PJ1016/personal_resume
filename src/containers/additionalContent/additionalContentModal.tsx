import React from "react";
import {
  Controller,
  type ControllerFieldState,
  type ControllerRenderProps,
  type UseFormReturn,
  type UseFormStateReturn,
} from "react-hook-form";
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
  const { register, control } = additionalFormHook;
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

            <Grid item xs={12} md={12}>
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
