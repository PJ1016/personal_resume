import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import type { PersonalDetailsForm } from ".";
interface IPersonalDetailsContent {
  formData: PersonalDetailsForm;
  handleOpen: any;
}

const PersonalDetailsContent = ({
  formData,
  handleOpen,
}: IPersonalDetailsContent) => {
  const {
    firstName,
    lastName,
    mobileNumber,
    emailAddress,
    address,
    linkedInAddress,
  } = formData;
  const handleSocialSite = () => {
    window.open(
      "https://www.linkedin.com/in/praveen-jayanth-8b0687199",
      "_blank"
    );
  };
  return (
    <div onClick={() => handleOpen()}>
      <Typography textAlign="center" fontWeight="bold" fontSize="2rem">
        {firstName} {lastName}
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography fontSize="0.8rem">{mobileNumber}</Typography>
        <Typography fontSize="0.8rem">{emailAddress}</Typography>
        <Typography fontSize="0.8rem">{address}</Typography>
        <Link
          fontSize="0.8rem"
          component="button"
          onClick={() => handleSocialSite()}
        >
          {linkedInAddress}
        </Link>
      </Stack>
    </div>
  );
};

export default PersonalDetailsContent;
