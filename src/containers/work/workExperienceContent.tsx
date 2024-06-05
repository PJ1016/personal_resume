import { Divider, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/store";
import SpecificCompany from "./specificCompany";
interface IWorkExperienceContent {
  handleOpen: () => void;
}
const WorkExperienceContent = ({ handleOpen }: IWorkExperienceContent) => {
  const { workExperience } = useAppSelector((state) => state.workExperience);
  const { experience } = useAppSelector((state) => state.resume);
  return (
    <div style={{ marginTop: "1rem" }} onClick={() => handleOpen()}>
      <Typography fontWeight="bold" fontSize="1rem">
        Work Experience
      </Typography>
      <Divider sx={{ marginY: ".5rem" }} />
      {experience.map((item, index) => (
        <SpecificCompany data={item} key={index} />
      ))}
    </div>
  );
};

export default WorkExperienceContent;
