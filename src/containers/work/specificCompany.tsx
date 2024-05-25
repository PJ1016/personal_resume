import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import type { IWorkExperienceState } from "../../store/slices/workExperienceSlice";
interface ISpecificCompany {
  data: IWorkExperienceState;
}
const SpecificCompany = ({ data }: ISpecificCompany) => {
  return (
    <Box style={{ marginBottom: "1rem" }}>
      <Grid container>
        <Grid item xs={6} md={6}>
          <Typography fontWeight="bold" fontSize="0.8rem">
            {data.companyName}
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography fontSize="0.8rem" fontWeight="bold" textAlign="end">
            {data.startDate}- {data.endDate}
          </Typography>
        </Grid>
      </Grid>
      <ul>
        {data.additionalContent.split("\n").map((item, index) => (
          <li key={`${index}-item`}>
            <Typography fontSize="0.8rem">{item}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default SpecificCompany;
