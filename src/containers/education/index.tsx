import React, { useState } from "react";
import EducationContent from "./educationContent";
import EducationModal from "./educationModal";
import { useForm } from "react-hook-form";
import {
  setEducation,
  type IEducationState,
} from "../../store/slices/educationSlice";
import { useAppDispatch } from "../../store/store";
export const educationDefaultValues = {
  education: [
    {
      id: "123",
      collegeName:
        "University of Cincinnati, Carl H. Lindner College of Business",
      city: "Cincinnati, Ohio",
      course: "Master of Science, Business Analytics",
      startDate: "August 2021",
      endDate: "August 2023",
    },
  ],
};
export interface IEducationHookProps {
  education: IEducationState[];
}
const Education = () => {
  const dispatch = useAppDispatch();
  const [isEducationModalOpen, setIsEducationModalOpen] =
    useState<boolean>(false);
  const handleClose = () => {
    setIsEducationModalOpen(false);
  };
  const handleOpen = () => {
    setIsEducationModalOpen(true);
  };
  const educationFormHook = useForm<IEducationHookProps>({
    defaultValues: educationDefaultValues,
  });
  const { handleSubmit } = educationFormHook;

  const onSubmit = handleSubmit((data) => {
    dispatch(setEducation(data.education));
    handleClose();
  });
  return (
    <div>
      <EducationContent handleOpen={handleOpen} />
      <EducationModal
        open={isEducationModalOpen}
        handleClose={handleClose}
        onSubmit={onSubmit}
        educationFormHook={educationFormHook}
      />
    </div>
  );
};

export default Education;
