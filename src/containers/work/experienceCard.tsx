import { IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../store/store";
import { deleteWorkExperience } from "../../store/slices/resumeSlice";
interface IExperienceCard {
  employeer: string;
  jobTitle: string;
  id: string;
}
const ExperienceCard = ({ employeer, jobTitle, id }: IExperienceCard) => {
  const dispatch = useAppDispatch();
  const deleteCard = (id: string) => {
    dispatch(deleteWorkExperience(id));
  };
  return (
    <div>
      <Paper sx={{ padding: "1rem", marginY: "1rem" }}>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <Stack>
            <Typography fontSize="0.7rem" fontWeight="bold">
              {employeer}
            </Typography>
            <Typography fontSize="0.7rem" fontWeight="bold">
              {jobTitle}
            </Typography>
          </Stack>
          <Stack direction="row">
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteCard(id)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default ExperienceCard;
