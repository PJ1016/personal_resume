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
import { useAppDispatch } from "../../store/store";
import {
  Controller,
  useForm,
  type ControllerFieldState,
  type ControllerRenderProps,
  type UseFormStateReturn,
} from "react-hook-form";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  defaultExperience,
  type ExperienceState,
} from "../../store/slices/experienceSlice";
import { addWorkInfo } from "../../store/slices/resumeSlice";
import { MAJOR_CITIES } from "../../constants/cities";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DevTool } from "@hookform/devtools";
import ReactQuill from "react-quill";
import { LoadingButton } from "@mui/lab";
import { GenerativeModel } from "@google/generative-ai";
export const cleanHtmlContent = (htmlContent: string) => {
  return htmlContent.replace(/\n\s*/g, "");
};
const ExperienceFormContent = ({ deleteExperience, id }: any) => {
  const workExperienceHook = useForm<ExperienceState>({
    defaultValues: defaultExperience,
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    watch,
    formState: { errors },
  } = workExperienceHook;

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data: any) => {
    dispatch(addWorkInfo(data));
    deleteExperience(id);
  });
  const geminiSecretKey = process.env.REACT_APP_GEMINI_SECRET_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const GenerateText = async (e: any) => {
    e.preventDefault();

    const client = new GenerativeModel(geminiSecretKey as string, {
      model: "gemini-1.0-pro",
    });
    try {
      setIsLoading(true);
      const result = await client.generateContent(
        `Can you outline the responsibilities with the primary skill ${watch("primarySkill") || "React"}? Please format the content as bullet points using HTML tags.`
      );
      setValue(
        "jobDescription",
        (result.response.candidates &&
          cleanHtmlContent(
            result.response.candidates[0].content.parts[0].text as string
          )) as string
      );
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const [presentCheckBox, setPresentCheckBox] = useState(false);
  return (
    <form onSubmit={onSubmit}>
      <Grid container marginTop={2} alignItems="center" spacing={2}>
        <Grid item md={8}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-employeer">
                Employer
              </InputLabel>
              <TextField
                autoFocus
                {...register(`employer`, {
                  required: {
                    value: true,
                    message: "Employeer name is required",
                  },
                })}
                id="outlined-adornment-employeer"
                error={Boolean(errors?.employer)}
                helperText={errors?.employer?.message}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-jobTitle">
                Job title
              </InputLabel>
              <TextField
                {...register(`jobTitle`, {
                  required: {
                    value: true,
                    message: "Job title is required",
                  },
                })}
                id="outlined-adornment-jobTitle"
                error={Boolean(errors?.jobTitle)}
                helperText={errors?.jobTitle?.message}
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
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-state">State</InputLabel>
              <TextField
                {...register(`state`, {
                  required: { value: true, message: "State is required" },
                })}
                id="outlined-adornment-state"
                error={Boolean(errors?.state)}
                helperText={errors?.state?.message}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-startDate">
                Start Date
              </InputLabel>
              <Controller
                name="startDate"
                rules={{
                  required: { value: true, message: "Start Date is Required" },
                }}
                control={control}
                render={({
                  field: { ref, onChange, value, ...field },
                }: {
                  field: ControllerRenderProps<ExperienceState, `startDate`>;
                  fieldState: ControllerFieldState;
                  formState: UseFormStateReturn<ExperienceState>;
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
                  field: ControllerRenderProps<ExperienceState, `endDate`>;
                  fieldState: ControllerFieldState;
                  formState: UseFormStateReturn<ExperienceState>;
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
                      setPresentCheckBox((prev) => !prev);
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
            <IconButton onClick={() => deleteExperience(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={onSubmit}>
              <SaveIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel htmlFor="outlined-adornment-endDate">
            Job Description
          </InputLabel>
          <Controller
            name="jobDescription"
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
        <Grid item xs={12} md={6} spacing={2}>
          <InputLabel htmlFor="outlined-adornment-endDate">
            Choose your career field and sub-field to find relevant pre-written
            examples.
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
        </Grid>
      </Grid>
      <DevTool control={control} />
    </form>
  );
};

export default ExperienceFormContent;
