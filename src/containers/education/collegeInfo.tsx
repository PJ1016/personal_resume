import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import type { IEducationState } from "../../store/slices/educationSlice";
interface ICollegeInfo {
  formData: IEducationState;
}
const CollegeInfo = ({ formData }: ICollegeInfo) => {
  return (
    <Box style={{ marginBottom: "1rem" }}>
      <Grid container>
        <Grid item xs={6} md={6} lg={6}>
          <Typography fontWeight="bold" fontSize="0.8rem">
            {formData.collegeName}
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Typography fontSize="0.8rem" fontWeight="bold" textAlign="end">
            {formData.city}
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography fontStyle="italic" fontSize="0.8rem">
            {formData.course}
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography fontSize="0.8rem" fontStyle="italic" textAlign="end">
            {formData.startDate} - {formData.endDate}
          </Typography>
        </Grid>
      </Grid>
      <Typography
        fontSize="0.8rem"
        dangerouslySetInnerHTML={{
          __html: formData.additionalContent as string,
        }}
      />
    </Box>
  );
};

export default CollegeInfo;
