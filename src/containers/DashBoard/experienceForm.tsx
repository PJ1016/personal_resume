import { Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import FormFooter from "./FormFooter";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useFieldArray, useForm } from "react-hook-form";
import { incrementActiveStep } from "../../store/slices/activeStepperSlice";
import { addPersonalInfo, addWorkInfo } from "../../store/slices/resumeSlice";
import FormHeader from "./FormHeader";
import {
  defaultExperienceState,
  type ExperienceState,
} from "../../store/slices/experienceSlice";
export interface IExperienceProps {
  education: ExperienceState[];
}
const ExperienceForm = () => {
  const { activeStep, maxStep } = useAppSelector(
    (state) => state.activeStepper
  );
  const { experience } = useAppSelector((state) => state.resume);

  const workExperienceHook = useForm<IExperienceProps>({
    defaultValues: { education: experience },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = workExperienceHook;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data: any) => {
    if (Object.keys(errors).length === 0) {
      if (activeStep < maxStep) {
        dispatch(incrementActiveStep());
        dispatch(addWorkInfo(data.education));
      }
    }
  });
  return (
    <>
      <FormHeader
        header="EXPERIENCE"
        subHeader="List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples."
      />
      {fields.map((item, index) => (
        <form onSubmit={onSubmit}>
          <Grid container marginTop={2}>
            <Grid item md={8}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="outlined-adornment-firstName">
                    Employer
                  </InputLabel>
                  <TextField
                    autoFocus
                    {...register(`education.${index}.employer`, {
                      required: {
                        value: true,
                        message: "First name is required",
                      },
                    })}
                    id="outlined-adornment-firstName"
                    error={Boolean(errors?.education?.[index]?.employer)}
                    inputProps={{
                      helperText: errors?.education?.[index]?.employer?.message,
                    }}
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="outlined-adornment-lastName">
                    Job title
                  </InputLabel>
                  <TextField
                    {...register(`education.${index}.jobTitle`, {
                      required: {
                        value: true,
                        message: "Last name is required",
                      },
                    })}
                    id="outlined-adornment-jobTitle"
                    error={Boolean(errors?.education?.[index]?.jobTitle)}
                    inputProps={{
                      helperText: errors?.education?.[index]?.jobTitle?.message,
                    }}
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="outlined-adornment-address">
                    City
                  </InputLabel>
                  <TextField
                    {...register(`education.${index}.city`, {
                      required: { value: true, message: "City is required" },
                    })}
                    id="outlined-adornment-city"
                    error={Boolean(errors?.education?.[index]?.city)}
                    helperText={errors?.education?.[index]?.city?.message}
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="outlined-adornment-state">
                    State
                  </InputLabel>
                  <TextField
                    {...register(`education.${index}.state`, {
                      required: { value: true, message: "state is required" },
                    })}
                    id="outlined-adornment-state"
                    error={Boolean(errors?.education?.[index]?.state)}
                    helperText={errors?.education?.[index]?.state?.message}
                    size="small"
                    fullWidth
                  />
                </Grid>

                <FormFooter />
              </Grid>
            </Grid>
          </Grid>
        </form>
      ))}
    </>
  );
};

export default ExperienceForm;
