import { Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import FormFooter from "./FormFooter";
import { type PersonalDetailState } from "../../store/slices/personalDetailSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useForm } from "react-hook-form";
import { incrementActiveStep } from "../../store/slices/activeStepperSlice";
import { addPersonalInfo } from "../../store/slices/resumeSlice";
import FormHeader from "./FormHeader";
const PersonalInfoForm = () => {
  const { activeStep, maxStep } = useAppSelector(
    (state) => state.activeStepper
  );
  const { personalInfo } = useAppSelector((state) => state.resume);
  const personalDetailHook = useForm<PersonalDetailState>({
    defaultValues: personalInfo,
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = personalDetailHook;
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data: any) => {
    if (Object.keys(errors).length === 0) {
      if (activeStep < maxStep) {
        dispatch(incrementActiveStep());
        dispatch(addPersonalInfo(data));
      }
    }
  });
  return (
    <>
      <FormHeader
        header="COMPLETE YOUR RESUME HEADING"
        subHeader="Employers will use this information to contact you."
      />
      <form onSubmit={onSubmit}>
        <Grid container marginTop={2}>
          <Grid item md={8}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-firstName">
                  First name
                </InputLabel>
                <TextField
                  autoFocus
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "First name is required",
                    },
                  })}
                  id="outlined-adornment-firstName"
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName?.message}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-lastName">
                  Last name
                </InputLabel>
                <TextField
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Last name is required",
                    },
                  })}
                  helperText={errors.lastName?.message}
                  id="outlined-adornment-lastName"
                  error={Boolean(errors.lastName)}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} />
              <Grid item xs={12} md={12}>
                <InputLabel htmlFor="outlined-adornment-address">
                  LinkedIn Address
                </InputLabel>
                <TextField
                  {...register("linkedInAddress", {
                    required: {
                      value: true,
                      message: "linked in address is required",
                    },
                  })}
                  id="outlined-adornment-address"
                  error={Boolean(errors.linkedInAddress)}
                  size="small"
                  fullWidth
                  helperText={errors.linkedInAddress?.message}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-emailAddress">
                  Email address
                </InputLabel>
                <TextField
                  {...register("emailAddress", {
                    required: {
                      value: true,
                      message: "Email address is required",
                    },
                    pattern: {
                      value: /^[\w\-.]+@[\w\-.]+\.[\w-]{2,4}$/,
                      message:
                        "Enter your email address.For Example John133@gmail.com",
                    },
                  })}
                  id="outlined-adornment-emailAddress"
                  error={Boolean(errors.emailAddress)}
                  size="small"
                  placeholder="e.g. keerthi25@gmail.com"
                  fullWidth
                  helperText={errors.emailAddress?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="outlined-adornment-mobileNumber">
                  Phone
                </InputLabel>
                <TextField
                  {...register("mobileNumber", {
                    required: {
                      value: true,
                      message: "Mobile number is required",
                    },
                    pattern: {
                      value: /^\d{10}$/,
                      message:
                        "Enter your 10-digit mobile number. For example, 9876543210.",
                    },
                  })}
                  id="outlined-adornment-mobileNumber"
                  error={Boolean(errors.mobileNumber)}
                  size="small"
                  placeholder="e.g. 9494039564"
                  fullWidth
                  helperText={errors.mobileNumber?.message}
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

export default PersonalInfoForm;
