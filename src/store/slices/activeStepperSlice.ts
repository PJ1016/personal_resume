import { createSlice } from "@reduxjs/toolkit";
export const resumeSteps = [
  "PERSONAL INFO",
  "EXPERIENCE",
  "EDUCATION",
  "SKILLS",
  "SUMMARY",
  "REVIEW & DOWNLOAD",
];
interface IActiveStepperSlice {
  activeStep: number;
  minStep: number;
  maxStep: number;
}
const initialState: IActiveStepperSlice = {
  activeStep: 0,
  minStep: 0,
  maxStep: resumeSteps.length - 1,
};

const activeStepperSlice = createSlice({
  name: "activeStepper",
  initialState,
  reducers: {
    incrementActiveStep(state) {
      if (state.activeStep < state.maxStep) {
        state.activeStep = state.activeStep + 1;
      }
    },
    decrementActiveStep(state) {
      if (state.activeStep > state.minStep) {
        state.activeStep = state.activeStep - 1;
      }
    },
  },
});
export const { incrementActiveStep, decrementActiveStep } =
  activeStepperSlice.actions;
export const activeStepperReducer = activeStepperSlice.reducer;
