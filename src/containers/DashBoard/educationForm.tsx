import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import FormHeader from "./FormHeader";
import {
  decrementActiveStep,
  incrementActiveStep,
} from "../../store/slices/activeStepperSlice";

import CardTile from "./cardTile";
import {
  defaultEdcationState,
  type IEducationState,
} from "../../store/slices/educationSlice";
import EducationFormContent from "./educationFormContent";
import { deleteEducationInfo } from "../../store/slices/resumeSlice";

export interface IExperienceProps {
  education: IEducationState[];
}
const EducationForm = () => {
  const { education } = useAppSelector((state) => state.resume);

  const { activeStep, minStep, maxStep } = useAppSelector(
    (state) => state.activeStepper
  );
  const dispatch = useAppDispatch();
  const handleBackButton = () => {
    if (activeStep > 0) dispatch(decrementActiveStep());
  };
  const [tempList, setTempList] = useState<IEducationState[]>([]);
  const addEducation = () => {
    setTempList((prev) => [
      ...prev,
      { ...defaultEdcationState, id: Math.random().toString() },
    ]);
  };
  const onSave = (data: any) => {
    if (activeStep < maxStep) {
      dispatch(incrementActiveStep());
    }
  };
  const handleDeleteForm = (id: string) => {
    const data = tempList.filter((item) => item.id !== id);
    console.log(id, data);

    setTempList(data);
  };
  const handleDeleteCard = (id: string) => {
    console.log(id);
    dispatch(deleteEducationInfo(id));
  };
  return (
    <>
      <FormHeader
        header="EDUCATION"
        subHeader="Tell us about any colleges, vocational programs, or training courses you took. Even if you didn’t finish, it’s important to list them."
      />
      {education.map((item) => (
        <CardTile
          key={item.id}
          handleDeleteCard={handleDeleteCard}
          title={item.collegeName}
          subTitle={item.course}
          id={item.id}
        />
      ))}
      {tempList.map((item) => (
        <EducationFormContent
          key={item.id}
          id={item.id}
          handleDeleteForm={handleDeleteForm}
        />
      ))}
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        marginTop={2}
      >
        <Button variant="contained" onClick={addEducation}>
          Add Education
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

export default EducationForm;
