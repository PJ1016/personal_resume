import { Divider, Typography } from "@mui/material";
import React from "react";
import CollegeInfo from "./collegeInfo";
import type { IEducationFormHook } from ".";
interface IEducationContent {
  educationFormData: IEducationFormHook[];
  handleOpen: () => void;
}
const EducationContent = ({
  educationFormData,
  handleOpen,
}: IEducationContent) => {
  return (
    <div onClick={handleOpen}>
      <Typography fontWeight="bold" fontSize="1rem" marginTop={2}>
        Education
      </Typography>
      <Divider sx={{ marginY: ".5rem" }} />
      {educationFormData.map((data, index) => (
        <CollegeInfo formData={data} key={`${index}.${data.collegeName}`} />
      ))}
    </div>
  );
};

export default EducationContent;
