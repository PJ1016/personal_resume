import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

import { useAppDispatch, useAppSelector } from "../../store/store";

import { NotToPrint } from "../home";
import { updateContent } from "../../store/slices/resumeSlice";
import type { IContent } from "../../store/slices/additionalContentSlice";
interface IAdditionalReadOnly {
  item: IContent;
  handleOpen: () => void;
}
const AdditionalTextReadOnly = ({ item, handleOpen }: IAdditionalReadOnly) => {
  const dispatch = useAppDispatch();
  const { additionalContent } = useAppSelector((state) => state.resume);
  const removeSection = (id: string) => {
    const data = additionalContent.filter((item) => {
      return item.id != id;
    });
    console.log(data);

    dispatch(updateContent(data));
  };
  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold">{item.title}</Typography>
        <NotToPrint>
          <IconButton onClick={() => removeSection(item.id)}>
            <CancelIcon />
          </IconButton>
        </NotToPrint>
      </Stack>
      <Divider sx={{ marginY: "3px" }} />

      <Box onClick={handleOpen}>
        <Grid container>
          {item.subHeader ? (
            <Grid item xs={6} md={6}>
              <Typography fontWeight="bold" fontSize="0.8rem">
                {item.subHeader}
              </Typography>
            </Grid>
          ) : null}

          {item.startDate ? (
            <Grid item xs={6} md={6}>
              <Typography fontSize="0.8rem" fontWeight="bold" textAlign="end">
                {item.startDate}- {item.endDate || "Present"}
              </Typography>
            </Grid>
          ) : null}
        </Grid>
        <Typography
          fontSize="0.8rem"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </Box>
    </div>
  );
};

export default AdditionalTextReadOnly;
