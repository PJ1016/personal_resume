import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  updateContent,
  type IContent,
} from "../../store/slices/additionalContentSlice";
import { NotToPrint } from "../home";
interface IAdditionalReadOnly {
  item: IContent;
  handleOpen: () => void;
}
const AdditionalTextReadOnly = ({ item, handleOpen }: IAdditionalReadOnly) => {
  const dispatch = useAppDispatch();
  const { additionalContent } = useAppSelector(
    (state) => state.additionalContent
  );
  const removeSection = (id: string) => {
    const data = additionalContent.filter((item) => item.id !== id);
    dispatch(updateContent(data));
  };
  return (
    <div onClick={handleOpen} style={{ marginTop: "1rem" }}>
      <Typography fontWeight="bold" fontSize="1rem">
        {item.title}
      </Typography>
      <Divider sx={{ marginY: ".5rem" }} />
      <Box style={{ marginBottom: "1rem" }}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ textAlign: "end !important" }}>
            <NotToPrint>
              <IconButton color="error" onClick={() => removeSection(item.id)}>
                <CancelIcon />
              </IconButton>
            </NotToPrint>
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography fontWeight="bold" fontSize="0.8rem">
              {item.subHeader}
            </Typography>
          </Grid>
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
