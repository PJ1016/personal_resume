import { Divider, Typography } from "@mui/material";
import React from "react";
import CollegeInfo from "./collegeInfo";
import { useAppSelector } from "../../store/store";

interface IEducationContent {
  handleOpen: () => void;
}
const EducationContent = ({ handleOpen }: IEducationContent) => {
  const { education } = useAppSelector((data) => data.education);
  return (
    <div onClick={handleOpen}>
      <Typography fontWeight="bold" fontSize="1rem" marginTop={2}>
        Education
      </Typography>
      <Divider sx={{ marginY: ".5rem" }} />
      {education.map((data, index) => (
        <CollegeInfo formData={data} key={`${index}.${data.collegeName}`} />
      ))}
    </div>
  );
};

export default EducationContent;
