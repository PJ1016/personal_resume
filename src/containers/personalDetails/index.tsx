import React from "react";
import { useAppSelector } from "../../store/store";
import { Link, Stack, Typography } from "@mui/material";

const PersonalDetails = () => {
  const { personalInfo } = useAppSelector((state) => state.resume);

  const content = [
    personalInfo.mobileNumber,
    personalInfo.emailAddress,
    personalInfo.city,
  ];

  const formattedContent = content.join(" • ");
  const handleSocialSite = () => {
    window.open(`https://${personalInfo.linkedInAddress}`, "_blank");
  };
  return (
    <>
      <Typography variant="h6" textAlign="center" fontWeight="bold">
        {personalInfo.firstName} {personalInfo.lastName}
      </Typography>

      <Stack alignItems="center" spacing={1}>
        <Typography fontSize="12px">{formattedContent}</Typography>
        <Link
          fontSize="12px"
          component="button"
          onClick={() => handleSocialSite()}
          lineHeight="0"
        >
          {personalInfo.linkedInAddress}
        </Link>
      </Stack>
    </>
  );
};

export default PersonalDetails;
