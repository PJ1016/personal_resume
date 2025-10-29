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
      {experience.map((item, index) => {
        return (
          <>
            <SpecificCompany data={item} key={item.id} />
            {index != experience.length - 1 && (
              <Divider sx={{ marginY: "1rem" }} />
            )}
          </>
        );
      })}
    </>
  );
};

export default WorkExperience;
