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
import React from "react";
import {
  Controller,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
  type UseFormReturn,
  type UseFormStateReturn,
} from "react-hook-form";
import type { IEducationFormHook } from ".";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
interface IEducationModal {
  open: boolean;
  handleClose: (close: boolean) => void;
  onSubmit: any;
  educationFormHook: UseFormReturn<IEducationFormHook, any, undefined>;
}
const EducationModal = ({
  open,
  handleClose,
  onSubmit,
  educationFormHook,
}: IEducationModal) => {
  const {
    register,
    control,
    formState: { errors },
  } = educationFormHook;
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Update Personal Details</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter all the fields below</DialogContentText>
        <form onSubmit={onSubmit}>
          <Paper sx={{ padding: "1rem", marginTop: "1rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} marginTop={1}>
                <TextField
                  autoFocus
                  {...register("collegeName", {
                    required: {
                      value: true,
                      message: "collegeName is required",
                    },
                  })}
                  label="College Name"
                  error={Boolean(errors.collegeName)}
                  helperText={errors.collegeName?.message}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  {...register("city", {
                    required: { value: true, message: "City is required" },
                  })}
                  error={Boolean(errors.city)}
                  helperText={errors.city?.message}
                  label="City"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  {...register("course", {
                    required: {
                      value: true,
                      message: "Course is required",
                    },
                  })}
                  error={Boolean(errors.course)}
                  helperText={errors.course?.message}
                  label="Course"
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
                    field: ControllerRenderProps<
                      IEducationFormHook,
                      "startDate"
                    >;
                    fieldState: ControllerFieldState;
                    formState: UseFormStateReturn<IEducationFormHook>;
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
                        textField: { variant: "standard" },
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
                    field: ControllerRenderProps<IEducationFormHook, "endDate">;
                    fieldState: ControllerFieldState;
                    formState: UseFormStateReturn<IEducationFormHook>;
                  }) => (
                    <DatePicker
                      {...field}
                      onChange={(newValue) =>
                        onChange(
                          dayjs(newValue).format("MMMMM YYYY").toUpperCase()
                        )
                      }
                      label="End Date"
                      views={["month", "year"]}
                      format="MMM-YYYY"
                      slotProps={{
                        textField: { variant: "standard" },
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={onSubmit}>
          Update details
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EducationModal;
