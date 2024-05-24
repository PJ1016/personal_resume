import { Grid, Typography } from "@mui/material";
import React from "react";
import type { IEducationFormHook } from ".";
interface ICollegeInfo {
  educationFormData: IEducationFormHook;
}
const CollegeInfo = ({ educationFormData }: ICollegeInfo) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" fontSize="0.8rem">
            {educationFormData.collegeName}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontSize="0.8rem" fontWeight="bold" textAlign="end">
            {educationFormData.city}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontStyle="italic" fontSize="0.8rem">
            {educationFormData.course}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontSize="0.8rem" fontStyle="italic" textAlign="end">
            {educationFormData.startDate} - {educationFormData.endDate}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CollegeInfo;
