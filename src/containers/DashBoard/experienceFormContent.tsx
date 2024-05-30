import { Box, Grid, IconButton, InputLabel, TextField } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../store/store";
import { useForm } from "react-hook-form";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  defaultExperience,
  type ExperienceState,
} from "../../store/slices/experienceSlice";
import { addWorkInfo } from "../../store/slices/resumeSlice";

const ExperienceFormContent = ({ deleteExperience, id }: any) => {
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
    dispatch(addWorkInfo(data));
    deleteExperience(id);
  });

  return (
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
              <InputLabel htmlFor="outlined-adornment-address">City</InputLabel>
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
              <InputLabel htmlFor="outlined-adornment-state">State</InputLabel>
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
      </Grid>
    </form>
  );
};

export default ExperienceFormContent;
