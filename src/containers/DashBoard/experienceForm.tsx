import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  decrementActiveStep,
  incrementActiveStep,
} from "../../store/slices/activeStepperSlice";
import FormHeader from "./FormHeader";
import {
  defaultExperience,
  type ExperienceState,
} from "../../store/slices/experienceSlice";
import ExperienceCard from "../work/experienceCard";
import ExperienceFormContent from "./experienceFormContent";
export interface IExperienceProps {
  education: ExperienceState[];
}
const ExperienceForm = () => {
  const { experience } = useAppSelector((state) => state.resume);
  const { activeStep, minStep, maxStep } = useAppSelector(
    (state) => state.activeStepper
  );
  const dispatch = useAppDispatch();
  const handleBackButton = () => {
    if (activeStep > 0) dispatch(decrementActiveStep());
  };
  const [tempList, setTempList] = useState<ExperienceState[]>([]);
  const addExperience = () => {
    setTempList((prev) => [
      ...prev,
      { ...defaultExperience, id: Math.random().toString() },
    ]);
  };
  const deleteExperience = (id: string) => {
    const data = tempList.filter((item) => item.id !== id);
    setTempList(data);
  };
  const onSave = (data: any) => {
    if (activeStep < maxStep) {
      dispatch(incrementActiveStep());
    }
  };
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
      {tempList.map((item) => (
        <ExperienceFormContent
          key={item.id}
          id={item.id}
          deleteExperience={deleteExperience}
        />
      ))}
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        marginTop={2}
      >
        <Button variant="contained" onClick={addExperience}>
          Add new position
        </Button>
      </Box>
      <Box alignItems="center" justifyContent="space-between" display="flex">
        <Button
          onClick={handleBackButton}
          disabled={activeStep === minStep}
          variant="contained"
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={activeStep === maxStep || tempList.length > 0}
          type="submit"
          onClick={onSave}
        >
          Save & Next
        </Button>
      </Box>
    </>
  );
};

export default ExperienceForm;
