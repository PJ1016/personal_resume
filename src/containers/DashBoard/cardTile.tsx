import { IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
interface ICardTile {
  title: string;
  subTitle: string;
  id: string;
  handleDeleteCard: (id: string) => void;
}
const CardTile = ({ title, subTitle, id, handleDeleteCard }: ICardTile) => {
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
              {title}
            </Typography>
            <Typography fontSize="0.7rem" fontWeight="bold">
              {subTitle}
            </Typography>
          </Stack>
          <Stack direction="row">
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteCard(id)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default CardTile;
