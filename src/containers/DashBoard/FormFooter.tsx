import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { decrementActiveStep } from "../../store/slices/activeStepperSlice";
import { Button, Grid } from "@mui/material";

const FormFooter = () => {
  const { activeStep, minStep, maxStep } = useAppSelector(
    (state) => state.activeStepper
  );
  const dispatch = useAppDispatch();
  const handleBackButton = () => {
    if (activeStep > 0) dispatch(decrementActiveStep());
  };

  return (
    <>
      <Grid item md={12} />
      <Grid item md={6} xs={12} sm={7}>
        <Button
          onClick={handleBackButton}
          disabled={activeStep === minStep}
          variant="contained"
        >
          Back
        </Button>
      </Grid>
      <Grid item md={6} textAlign="end" xs={4}>
        <Button
          variant="contained"
          disabled={activeStep === maxStep}
          type="submit"
        >
          Save & Next
        </Button>
      </Grid>
    </>
  );
};

export default FormFooter;
