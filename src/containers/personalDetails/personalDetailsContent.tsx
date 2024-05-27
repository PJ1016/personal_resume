import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/store";
interface IPersonalDetailsContent {
  handleOpen: any;
}

const PersonalDetailsContent = ({ handleOpen }: IPersonalDetailsContent) => {
  const handleSocialSite = () => {
    window.open(
      "https://www.linkedin.com/in/praveen-jayanth-8b0687199",
      "_blank"
    );
  };
  const { personalDetail } = useAppSelector((state) => state.personalDetail);
  const {
    firstName,
    address,
    emailAddress,
    lastName,
    linkedInAddress,
    mobileNumber,
  } = personalDetail;
  return (
    <>
      <span onClick={() => handleOpen()}>
        <Typography textAlign="center" fontWeight="bold" fontSize="2rem">
          {firstName} {lastName}
        </Typography>
      </span>

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
    </>
  );
};

export default PersonalDetailsContent;
