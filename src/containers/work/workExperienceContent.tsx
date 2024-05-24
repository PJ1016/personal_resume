import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import SpecificCompany from "./specificCompany";
import type { IWorkExperienceFormData } from ".";
interface IWorkExperienceContent {
  workExperienceFormData: IWorkExperienceFormData[];
  handleOpen: () => void;
}
const WorkExperienceContent = ({
  workExperienceFormData,
  handleOpen,
}: IWorkExperienceContent) => {
  return (
    <div style={{ marginTop: "1rem" }} onClick={() => handleOpen()}>
      <Typography fontWeight="bold" fontSize="1rem">
        Work Experience
      </Typography>
      <Divider sx={{ marginY: ".5rem" }} />
      {workExperienceFormData.map((item, index) => (
        <SpecificCompany data={item} key={index} />
      ))}
    </div>
  );
};

export default WorkExperienceContent;
