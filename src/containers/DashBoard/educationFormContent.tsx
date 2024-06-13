import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  defaultEdcationState,
  type IEducationState,
} from "../../store/slices/educationSlice";
import {
  Controller,
  useForm,
  type ControllerFieldState,
  type ControllerRenderProps,
  type UseFormStateReturn,
} from "react-hook-form";
import { MAJOR_CITIES } from "../../constants/cities";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DevTool } from "@hookform/devtools";
import { addEducationInfo } from "../../store/slices/resumeSlice";
import { useAppDispatch } from "../../store/store";
import ReactQuill from "react-quill";
interface IEducationFormContent {
  id: string;
  handleDeleteForm: (id: string) => void;
}
const EducationFormContent = ({
  handleDeleteForm,
  id,
}: IEducationFormContent) => {
  const educationHook = useForm<IEducationState>({
    defaultValues: defaultEdcationState,
  });
  const [presentCheckBox, setPresentCheckBox] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    watch,
    formState: { errors },
  } = educationHook;
  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data: any) => {
    dispatch(addEducationInfo(data));
    handleDeleteForm(id);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Grid container marginTop={2} alignItems="center" spacing={2}>
          <Grid item md={8}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-College">
                  College name
                </InputLabel>
                <TextField
                  autoFocus
                  {...register(`collegeName`, {
                    required: {
                      value: true,
                      message: "College name is required",
                    },
                  })}
                  placeholder="Harvard University"
                  id="outlined-adornment-College"
                  error={Boolean(errors?.collegeName)}
                  helperText={errors?.collegeName?.message}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-course">
                  Course name
                </InputLabel>
                <TextField
                  {...register(`course`, {
                    required: {
                      value: true,
                      message: "Course name is required",
                    },
                  })}
                  id="outlined-adornment-course"
                  placeholder="Computer science and engineering"
                  error={Boolean(errors?.course)}
                  helperText={errors?.course?.message}
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-city">City</InputLabel>

                <Autocomplete
                  freeSolo
                  id="outlined-adornment-city"
                  options={MAJOR_CITIES}
                  onChange={(_, newValue) => {
                    setValue("city", newValue as string);
                  }}
                  value={watch("city")}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      fullWidth
                      {...register("city", {
                        required: { value: true, message: "City is required" },
                      })}
                      error={Boolean(errors.city)}
                      helperText={errors.city?.message}
                      placeholder="New York"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-startDate">
                  Start Date
                </InputLabel>
                <Controller
                  name="startDate"
                  rules={{
                    required: {
                      value: true,
                      message: "Start Date is Required",
                    },
                  }}
                  control={control}
                  render={({
                    field: { ref, onChange, value, ...field },
                  }: {
                    field: ControllerRenderProps<IEducationState, `startDate`>;
                    fieldState: ControllerFieldState;
                    formState: UseFormStateReturn<IEducationState>;
                  }) => (
                    <DatePicker
                      {...field}
                      onChange={(newValue) =>
                        onChange(dayjs(newValue).format("MMM YYYY"))
                      }
                      value={value ? dayjs(value, "MMM YYYY") : null}
                      views={["month", "year"]}
                      format="MMM-YYYY"
                      slotProps={{
                        textField: {
                          size: "small",
                          error: Boolean(errors?.startDate),
                          helperText: errors?.startDate?.message,
                          fullWidth: true,
                        },
                        field: {
                          clearable: true,
                          onClear: () => reset({ endDate: "" }),
                        },
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6} alignItems="center">
                <InputLabel htmlFor="outlined-adornment-endDate">
                  End Date
                </InputLabel>
                <Controller
                  name="endDate"
                  rules={{
                    required: { value: true, message: "End Date is Required" },
                  }}
                  control={control}
                  render={({
                    field: { ref, onChange, value, ...field },
                    fieldState: { error },
                  }: {
                    field: ControllerRenderProps<IEducationState, `endDate`>;
                    fieldState: ControllerFieldState;
                    formState: UseFormStateReturn<IEducationState>;
                  }) => (
                    <DatePicker
                      {...field}
                      onChange={(newValue) =>
                        onChange(dayjs(newValue).format("MMM YYYY"))
                      }
                      value={value ? dayjs(value, "MMM YYYY") : null}
                      views={["month", "year"]}
                      format="MMM-YYYY"
                      disabled={presentCheckBox}
                      slotProps={{
                        textField: {
                          size: "small",
                          error: Boolean(error),
                          helperText: errors?.endDate?.message,
                          fullWidth: true,
                        },
                        field: {
                          clearable: true,
                          onClear: () => reset({ endDate: "" }),
                        },
                      }}
                    />
                  )}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      value={presentCheckBox}
                      onChange={() => {
                        setPresentCheckBox((prev: any) => !prev);
                        setValue("endDate", "Present");
                      }}
                      size="small"
                    />
                  }
                  label={
                    <InputLabel htmlFor="outlined-adornment-endDate">
                      I Presently work here
                    </InputLabel>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Box
              display="flex"
              gap="1rem"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton onClick={() => handleDeleteForm(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={onSubmit}>
                <SaveIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="outlined-adornment-endDate">
              Additional content
            </InputLabel>
            <Controller
              name="additionalContent"
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
          {/* <Grid item xs={12} md={6} spacing={2}>
            <InputLabel htmlFor="outlined-adornment-endDate">
              Choose your career field and sub-field to find relevant
              pre-written examples.
            </InputLabel>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-endDate">
                Primary Skill
              </InputLabel>
              <TextField
                autoFocus
                {...register("primarySkill")}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <LoadingButton
                size="small"
                onClick={GenerateText}
                loading={isLoading}
                variant="contained"
                sx={{ marginTop: "1rem" }}
              >
                Generate Summary
              </LoadingButton>
            </Grid>
          </Grid> */}
        </Grid>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default EducationFormContent;
