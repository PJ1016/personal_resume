import { Box, Grid, IconButton, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  resumeSteps,
  updateActiveStep,
} from "../../store/slices/activeStepperSlice";

const HeaderMenu = () => {
  const { activeStep } = useAppSelector((item) => item.activeStepper);
  const dispatch = useAppDispatch();
  const handleHomeButton = () => {
    dispatch(updateActiveStep(0));
  };
  const naviagteStep = (index: number) => {
    if (index < activeStep) dispatch(updateActiveStep(index));
  };
  return (
    <Grid container sx={{ marginTop: "1rem" }}>
      <Grid item xs={6}>
        <IconButton size="large" onClick={handleHomeButton}>
          <HomeIcon color="primary" sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Grid>

      <Grid item xs={6} justifyContent="flex-end">
        <Box sx={{ direction: "row" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {resumeSteps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel
                    {...labelProps}
                    onClick={() => naviagteStep(index)}
                  >
                    {label}
                  </StepLabel>
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
