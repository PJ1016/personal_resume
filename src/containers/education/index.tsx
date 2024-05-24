import React, { useState } from "react";
import EducationContent from "./educationContent";
import EducationModal from "./educationModal";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
export interface IEducationFormHook {
  id: string;
  collegeName: string;
  city: string;
  course: string;
  startDate: string;
  endDate: string;
  additionalContent?: string;
}
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
  education: IEducationFormHook[];
}
const Education = () => {
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
  const { control, handleSubmit } = educationFormHook;
  const [educationFormData, setEducationFormData] = useState<
    IEducationFormHook[]
  >(educationDefaultValues.education);
  const onSubmit = handleSubmit((data) => {
    setEducationFormData(data.education);
    handleClose();
  });
  return (
    <div>
      <EducationContent
        educationFormData={educationFormData}
        handleOpen={handleOpen}
      />
      <EducationModal
        open={isEducationModalOpen}
        handleClose={handleClose}
        onSubmit={onSubmit}
        educationFormHook={educationFormHook}
      />
      <DevTool control={control} />
    </div>
  );
};

export default Education;
