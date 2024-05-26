import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
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
import ReactQuill from "react-quill";
import { NotToPrint } from "../home";
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
              <Stack alignItems="end">
                <IconButton
                  color="error"
                  id="removeCard"
                  onClick={() => handleRemoveCard(item.id)}
                >
                  <CancelIcon />
                </IconButton>
              </Stack>
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
                    size="small"
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
                    size="small"
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
                    size="small"
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
                          textField: { variant: "standard", size: "small" },
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
                          textField: { variant: "standard", size: "small" },
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name={`education.${index}.additionalContent`}
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
