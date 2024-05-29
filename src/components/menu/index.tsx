import { Box, Grid, IconButton, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useAppSelector } from "../../store/store";
import { resumeSteps } from "../../store/slices/activeStepperSlice";

const HeaderMenu = () => {
  const { activeStep } = useAppSelector((item) => item.activeStepper);

  return (
    <Grid container sx={{ marginTop: "1rem" }}>
      <Grid item xs={6}>
        <IconButton size="large">
          <HomeIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Grid>

      <Grid item xs={6} justifyContent="flex-end">
        <Box sx={{ direction: "row" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {resumeSteps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeaderMenu;
