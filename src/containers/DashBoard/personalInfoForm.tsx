import { Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import FormFooter from "./FormFooter";
import { type PersonalDetailState } from "../../store/slices/personalDetailSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useForm } from "react-hook-form";
import { incrementActiveStep } from "../../store/slices/activeStepperSlice";
import { addPersonalInfo } from "../../store/slices/resumeSlice";
const PersonalInfoForm = () => {
  const { activeStep, maxStep } = useAppSelector(
    (state) => state.activeStepper
  );
  const { personalInfo } = useAppSelector((state) => state.resume);
  const personalDetailHook = useForm<PersonalDetailState>({
    defaultValues: personalInfo,
  });
  console.log(useAppSelector((state) => state.resume));
  const {
    register,
    handleSubmit,
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
                inputProps={{ helperText: errors.firstName?.message }}
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
                id="outlined-adornment-lastName"
                error={Boolean(errors.lastName)}
                size="small"
                fullWidth
              />
              {errors.lastName?.message}
            </Grid>
            <Grid item md={6} />
            <Grid item xs={12} md={12}>
              <InputLabel htmlFor="outlined-adornment-address">
                Address
              </InputLabel>
              <TextField
                {...register("address", {
                  required: { value: true, message: "address is required" },
                })}
                id="outlined-adornment-address"
                error={Boolean(errors.address)}
                size="small"
                fullWidth
              />
              {errors.address?.message}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-city">City</InputLabel>
              <TextField
                {...register("city", {
                  required: { value: true, message: "city is required" },
                })}
                id="outlined-adornment-city"
                error={Boolean(errors.city)}
                size="small"
                fullWidth
              />
              {errors.city?.message}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="outlined-adornment-country">
                Country
              </InputLabel>
              <TextField
                {...register("country", {
                  required: { value: true, message: "country is required" },
                })}
                id="outlined-adornment-country"
                error={Boolean(errors.country)}
                size="small"
                fullWidth
              />
              {errors.country?.message}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="outlined-adornment-zipCode">
                Zip code
              </InputLabel>
              <TextField
                {...register("zipCode", {
                  required: { value: true, message: "zipCode is required" },
                })}
                id="outlined-adornment-zipCode"
                error={Boolean(errors.zipCode)}
                size="small"
                placeholder="e.g. 60185"
                fullWidth
              />
              {errors.zipCode?.message}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-emailAddress">
                Email address
              </InputLabel>
              <TextField
                {...register("emailAddress", {
                  required: {
                    value: true,
                    message: "emailAddress is required",
                  },
                })}
                id="outlined-adornment-emailAddress"
                error={Boolean(errors.emailAddress)}
                size="small"
                placeholder="e.g. keerthi25@gmail.com"
                fullWidth
              />
              {errors.emailAddress?.message}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-mobileNumber">
                Phone
              </InputLabel>
              <TextField
                {...register("mobileNumber", {
                  required: {
                    value: true,
                    message: "mobileNumber is required",
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
  );
};

export default PersonalInfoForm;
