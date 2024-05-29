import { Typography } from "@mui/material";
import React from "react";
interface IFormHeader {
  header: string;
  subHeader: string;
}
const FormHeader = ({ header, subHeader }: IFormHeader) => {
  return (
    <>
      <Typography fontWeight="bold" fontSize="2rem">
        {header}
      </Typography>
      <Typography fontSize="1rem">{subHeader}</Typography>
    </>
  );
};

export default FormHeader;
