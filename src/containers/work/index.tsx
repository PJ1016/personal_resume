import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import WorkExperienceContent from "./workExperienceContent";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import WorkModal from "./workModal";
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
  const [isWorkModalOpen, setIsWorkModalOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsWorkModalOpen(false);
  };
  const handleOpen = () => {
    setIsWorkModalOpen(true);
  };
  const workExperienceFormHook = useForm<IWorkExperienceFormHook>({
    defaultValues: {
      workExperience: [
        {
          id: "",
          companyName: "",
          startDate: "",
          endDate: "",
          additionalContent: "",
        },
      ],
    },
  });
  const [workExperienceFormData, setWorkExperienceFormData] = useState<
    IWorkExperienceFormData[]
  >([
    {
      companyName: "RECEIVABLES MANAGEMENT COMPANY (Client)",
      startDate: "Jan 2022",
      endDate: "Present",
      additionalContent:
        "Developed 500 anticounterfeit scripts thereby preventing the counterfeit items surfacing onto the catalog for the brands protected under \n Brand Protection Agreement with Amazon. \n Constructed a cost-effective mechanism of running queries daily on the Amazon website to identify counterfeit products so that action \n can be taken to ensure Customer trust. \n Ensured that associates' performance and quality was checked, reported the quality metrics, and provided timely feedback, which improved quality. \n Successfully driven the protection rate to 96% as the Quality Controller for the team thereby exceeding the YTD goals",
      id: Math.random().toString(),
    },
  ]);
  const { handleSubmit, control } = workExperienceFormHook;
  const onSubmit = handleSubmit((data: IWorkExperienceFormHook) => {
    setWorkExperienceFormData(data.workExperience);
    handleClose();
  });
  return (
    <>
      <WorkExperienceContent
        workExperienceFormData={workExperienceFormData}
        handleOpen={handleOpen}
      />
      <DevTool control={control} />
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
