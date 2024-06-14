import React, { useState } from "react";
import EducationContent from "./educationContent";
import EducationModal from "./educationModal";
import { useForm } from "react-hook-form";
import {
  initialState,
  setEducation,
  type IEducationState,
} from "../../store/slices/educationSlice";
import { useAppDispatch } from "../../store/store";
import { updateEducationInfo } from "../../store/slices/resumeSlice";

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
    defaultValues: { education: initialState },
  });
  const { handleSubmit } = educationFormHook;

  const onSubmit = handleSubmit((data) => {
    dispatch(updateEducationInfo(data.education));
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
