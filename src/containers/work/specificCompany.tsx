import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import type { ExperienceState } from "../../store/slices/experienceSlice";
interface ISpecificCompany {
  data: ExperienceState;
}
const SpecificCompany = ({ data }: ISpecificCompany) => {
  return (
    <Box style={{ marginBottom: "1rem" }}>
      <Grid container>
        <Grid item xs={6} md={6}>
          <Typography fontWeight="bold" fontSize="0.8rem">
            {data.employer}
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography fontSize="0.8rem" fontWeight="bold" textAlign="end">
            {data.startDate}- {data.endDate || "Present"}
          </Typography>
        </Grid>
      </Grid>
      <Typography
        fontSize="0.8rem"
        dangerouslySetInnerHTML={{ __html: data.jobDescription }}
      />
    </Box>
  );
};

export default SpecificCompany;
