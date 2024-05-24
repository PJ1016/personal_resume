import { Grid, Typography } from "@mui/material";
import React from "react";
import type { IEducationFormHook } from ".";
interface ICollegeInfo {
  formData: IEducationFormHook;
}
const CollegeInfo = ({ formData }: ICollegeInfo) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" fontSize="0.8rem">
            {formData.collegeName}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontSize="0.8rem" fontWeight="bold" textAlign="end">
            {formData.city}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontStyle="italic" fontSize="0.8rem">
            {formData.course}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontSize="0.8rem" fontStyle="italic" textAlign="end">
            {formData.startDate} - {formData.endDate}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CollegeInfo;
