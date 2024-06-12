import React from "react";
import { Divider, Typography } from "@mui/material";
import SpecificCompany from "./specificCompany";
import { useAppSelector } from "../../store/store";

const WorkExperience = () => {
  const { experience } = useAppSelector((state) => state.resume);
  return (
    <>
      <Typography fontWeight="bold">Work Experience</Typography>
      <Divider sx={{ marginY: ".5rem" }} />
      {experience.map((item) => (
        <SpecificCompany data={item} key={item.id} />
      ))}
    </>
  );
};

export default WorkExperience;
