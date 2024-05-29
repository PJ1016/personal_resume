import React from "react";
import HeaderMenu from "../../components/menu";
import { Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  decrementActiveStep,
  incrementActiveStep,
} from "../../store/slices/activeStepperSlice";

const DashBaord = () => {
  const { activeStep, minStep, maxStep } = useAppSelector(
    (state) => state.activeStepper
  );
  const dispatch = useAppDispatch();
  const handleBackButton = () => {
    if (activeStep > 0) dispatch(decrementActiveStep());
  };
  const handleNextButton = () => {
    if (activeStep < 5) dispatch(incrementActiveStep());
  };
  return (
    <div>
      <HeaderMenu />
      <div style={{ minHeight: "300px" }} />
      <Stack
        direction={{ md: "row", sx: "column" }}
        justifyContent="space-between"
        gap={2}
      >
        <Button
          onClick={handleBackButton}
          disabled={activeStep === minStep}
          variant="contained"
        >
          Back
        </Button>
        <Button
          onClick={handleNextButton}
          variant="contained"
          disabled={activeStep === maxStep}
        >
          Save & Next
        </Button>
      </Stack>
    </div>
  );
};

export default DashBaord;
