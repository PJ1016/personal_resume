import React, { memo } from "react";
import { Box, Link, Stack, Typography, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useAppSelector } from "../../store/store";

const sanitizeUrl = (input?: string) => {
  if (!input) return null;
  const trimmed = input.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};

const PersonalDetails: React.FC = () => {
  const personalInfo = useAppSelector((s) => s.resume.personalInfo);

  if (!personalInfo) return null;

  const {
    firstName = "",
    lastName = "",
    mobileNumber,
    emailAddress,
    linkedInAddress,
  } = personalInfo;

  const linkedInUrl = sanitizeUrl(linkedInAddress);

  return (
    <Box textAlign="center" py={1}>
      <Typography variant="h4" fontWeight="bold">
        {firstName} {lastName}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" mb={1}>
        Frontend Engineer — React & TypeScript
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        {mobileNumber && (
          <Box display="flex" alignItems="center" gap={0.5}>
            <PhoneIcon fontSize="small" />
            <Link
              href={`tel:${mobileNumber}`}
              underline="hover"
              color="inherit"
            >
              {mobileNumber}
            </Link>
          </Box>
        )}
        {emailAddress && (
          <Box display="flex" alignItems="center" gap={0.5}>
            <EmailOutlinedIcon fontSize="small" />
            <Link
              href={`mailto:${emailAddress}`}
              underline="hover"
              color="inherit"
            >
              {emailAddress}
            </Link>
          </Box>
        )}
        <Box display="flex" alignItems="center" gap={0.5}>
          <LinkedInIcon fontSize="small" sx={{ color: "#0a66c2" }} />
          {linkedInUrl ? (
            <Link
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: "#0a66c2" }}
            >
              LinkedIn
            </Link>
          ) : (
            <Link
              component="button"
              underline="hover"
              sx={{ color: "#0a66c2" }}
            >
              LinkedIn
            </Link>
          )}
        </Box>
      </Stack>

      <Divider sx={{ mt: 1, width: "70%", mx: "auto" }} />
    </Box>
  );
};

export default memo(PersonalDetails);
