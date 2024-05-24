import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import type { IEducationFormHook } from ".";
interface ICollegeInfo {
  formData: IEducationFormHook;
}
const CollegeInfo = ({ formData }: ICollegeInfo) => {
  return (
    <Box style={{ marginBottom: "1rem" }}>
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
      <ul>
        {formData.additionalContent?.split("\n").map((item, index) => (
          <li>
            <Typography fontSize="0.8rem" fontStyle="italic" key={index}>
              {item}X
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default CollegeInfo;
