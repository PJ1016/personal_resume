import React from "react";
import { useAppSelector } from "../../store/store";
import { Link, Stack, Typography } from "@mui/material";

const PersonalDetails = () => {
  const handleSocialSite = () => {
    window.open(
      "https://www.linkedin.com/in/praveen-jayanth-8b0687199",
      "_blank"
    );
  };
  const { personalDetail } = useAppSelector((state) => state.personalDetail);
  const { linkedInAddress } = personalDetail;
  const { personalInfo } = useAppSelector((state) => state.resume);
  return (
    <>
      <Typography textAlign="center" fontWeight="bold" fontSize="2rem">
        {personalInfo.firstName} {personalInfo.lastName}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography fontSize="0.8rem">{personalInfo.mobileNumber}</Typography>
        <Typography fontSize="0.8rem">{personalInfo.emailAddress}</Typography>
        <Typography fontSize="0.8rem">{personalInfo.city}</Typography>
        <Link
          fontSize="0.8rem"
          component="button"
          onClick={() => handleSocialSite()}
        >
          {linkedInAddress}
        </Link>
      </Stack>
    </>
  );
};

export default PersonalDetails;
