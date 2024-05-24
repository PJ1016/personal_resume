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
  useFieldArray,
  type ControllerFieldState,
  type ControllerRenderProps,
  type UseFormReturn,
  type UseFormStateReturn,
} from "react-hook-form";
import type { IEducationHookProps } from ".";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
interface IEducationModal {
  open: boolean;
  handleClose: (close: boolean) => void;
  onSubmit: any;
  educationFormHook: UseFormReturn<IEducationHookProps, any, undefined>;
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
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  const handleRemoveCard = (id: string) => {
    const index = fields.findIndex((item) => item.id === id);
    remove(index);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Update Personal Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {fields.length > 0
            ? "Please enter all the fields below"
            : "Click on add Education"}
        </DialogContentText>
        <form onSubmit={onSubmit}>
          {fields.map((item, index) => (
            <Paper
              sx={{ padding: "1rem", marginTop: "1rem" }}
              key={`${item.collegeName}.${index}`}
              elevation={5}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} marginTop={1}>
                  <TextField
                    autoFocus
                    {...register(`education.${index}.collegeName`, {
                      required: {
                        value: true,
                        message: "collegeName is required",
                      },
                    })}
                    label="College Name"
                    error={Boolean(errors?.education?.[index]?.collegeName)}
                    helperText={
                      errors?.education?.[index]?.collegeName?.message
                    }
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    {...register(`education.${index}.city`, {
                      required: { value: true, message: "City is required" },
                    })}
                    error={Boolean(errors?.education?.[index]?.city)}
                    helperText={errors?.education?.[index]?.city?.message}
                    label="City"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    {...register(`education.${index}.course`, {
                      required: {
                        value: true,
                        message: "Course is required",
                      },
                    })}
                    error={Boolean(errors?.education?.[index]?.course)}
                    helperText={errors?.education?.[index]?.course?.message}
                    label="Course"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name={`education.${index}.startDate`}
                    control={control}
                    render={({
                      field: { ref, onChange, value, ...field },
                      fieldState: { error },
                    }: {
                      field: ControllerRenderProps<
                        IEducationHookProps,
                        `education.${number}.startDate`
                      >;
                      fieldState: ControllerFieldState;
                      formState: UseFormStateReturn<IEducationHookProps>;
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
                    name={`education.${index}.endDate`}
                    control={control}
                    render={({
                      field: { ref, onChange, value, ...field },
                      fieldState: { error },
                    }: {
                      field: ControllerRenderProps<
                        IEducationHookProps,
                        `education.${number}.endDate`
                      >;
                      fieldState: ControllerFieldState;
                      formState: UseFormStateReturn<IEducationHookProps>;
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
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    {...register(`education.${index}.additionalContent`)}
                    multiline
                    rows={4}
                    error={Boolean(
                      errors?.education?.[index]?.additionalContent
                    )}
                    helperText={
                      errors?.education?.[index]?.additionalContent?.message
                    }
                    label="Additional Content"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Button onClick={() => handleRemoveCard(item.id)}>
                Remove Education
              </Button>
            </Paper>
          ))}
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            append({
              id: Math.random().toString(),
              collegeName:
                "University of Cincinnati, Carl H. Lindner College of Business",
              city: "Cincinnati, Ohio",
              course: "Master of Science, Business Analytics",
              startDate: "August 2021",
              endDate: "August 2023",
            });
          }}
        >
          Add Education
        </Button>
        <Button type="submit" onClick={onSubmit}>
          Update details
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EducationModal;
