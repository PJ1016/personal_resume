import React, { useState } from "react";
import WorkExperienceContent from "./workExperienceContent";
import { useForm } from "react-hook-form";
import WorkModal from "./workModal";
import { useAppDispatch } from "../../store/store";
import {
  defaultWorkSummary,
  setWorkExperience,
} from "../../store/slices/workExperienceSlice";
export interface IWorkExperienceFormData {
  companyName: string;
  startDate: string;
  endDate: string;
  additionalContent: string;
  id: string;
}
export interface IWorkExperienceFormHook {
  workExperience: IWorkExperienceFormData[];
}
const WorkExperience = () => {
  const dispatch = useAppDispatch();
  const [isWorkModalOpen, setIsWorkModalOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsWorkModalOpen(false);
  };
  const handleOpen = () => {
    setIsWorkModalOpen(true);
  };
  const workExperienceFormHook = useForm<IWorkExperienceFormHook>({
    defaultValues: {
      workExperience: defaultWorkSummary,
    },
  });

  const { handleSubmit } = workExperienceFormHook;
  const onSubmit = handleSubmit((data: IWorkExperienceFormHook) => {
    dispatch(setWorkExperience(data.workExperience));
    handleClose();
  });
  return (
    <>
      <WorkExperienceContent handleOpen={handleOpen} />
      <WorkModal
        open={isWorkModalOpen}
        handleClose={handleClose}
        onSubmit={onSubmit}
        workExperienceFormHook={workExperienceFormHook}
      />
    </>
  );
};

export default WorkExperience;
