import { Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import FormFooter from "./FormFooter";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useForm } from "react-hook-form";
import { incrementActiveStep } from "../../store/slices/activeStepperSlice";
import { addWorkInfo } from "../../store/slices/resumeSlice";
import FormHeader from "./FormHeader";
import {
  defaultExperience,
  type ExperienceState,
} from "../../store/slices/experienceSlice";
import ExperienceCard from "../work/experienceCard";
export interface IExperienceProps {
  education: ExperienceState[];
}
const ExperienceForm = () => {
  const { activeStep, maxStep } = useAppSelector(
    (state) => state.activeStepper
  );
  const { experience } = useAppSelector((state) => state.resume);

  const workExperienceHook = useForm<ExperienceState>({
    defaultValues: defaultExperience,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = workExperienceHook;

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data: any) => {
    if (Object.keys(errors).length === 0) {
      if (activeStep < maxStep) {
        dispatch(incrementActiveStep());
        dispatch(addWorkInfo(data));
      }
    }
  });
  return (
    <>
      <FormHeader
        header="EXPERIENCE"
        subHeader="List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples."
      />
      {experience.map((item) => (
        <ExperienceCard
          employeer={item.employer}
          jobTitle={item.jobTitle}
          id={item.id}
        />
      ))}

      <form onSubmit={onSubmit}>
        <Grid container marginTop={2} alignItems="center">
          <Grid item md={8}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-firstName">
                  Employer
                </InputLabel>
                <TextField
                  autoFocus
                  {...register(`employer`, {
                    required: {
                      value: true,
                      message: "First name is required",
                    },
                  })}
                  id="outlined-adornment-firstName"
                  error={Boolean(errors?.employer)}
                  inputProps={{
                    helperText: errors?.employer?.message,
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
                  {...register(`jobTitle`, {
                    required: {
                      value: true,
                      message: "Last name is required",
                    },
                  })}
                  id="outlined-adornment-jobTitle"
                  error={Boolean(errors?.jobTitle)}
                  inputProps={{
                    helperText: errors?.jobTitle?.message,
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
                  {...register(`city`, {
                    required: { value: true, message: "City is required" },
                  })}
                  id="outlined-adornment-city"
                  error={Boolean(errors?.city)}
                  helperText={errors?.city?.message}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-state">
                  State
                </InputLabel>
                <TextField
                  {...register(`state`, {
                    required: { value: true, message: "state is required" },
                  })}
                  id="outlined-adornment-state"
                  error={Boolean(errors?.state)}
                  helperText={errors?.state?.message}
                  size="small"
                  fullWidth
                />
              </Grid>

              <FormFooter />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ExperienceForm;
