import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import SummaryDetailsModal from "./summaryDetailsModal";
import {
  defaultSumamry,
  setSummary,
  type ISummaryState,
} from "../../store/slices/summarySlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
const Summary = () => {
  const dispatch = useAppDispatch();
  const [openSummaryDetails, setOpenSummaryDetails] = React.useState(false);
  const handleOpen = () => setOpenSummaryDetails(true);
  const handleClose = () => setOpenSummaryDetails(false);
  const { summary } = useAppSelector((state) => state.summary);

  const summaryFormHook = useForm<ISummaryState>({
    defaultValues: {
      summary: defaultSumamry,
    },
  });
  const { handleSubmit } = summaryFormHook;
  const onSubmit = handleSubmit((data) => {
    dispatch(setSummary(data));
    handleClose();
  });
  return (
    <Box marginTop={2}>
      <Typography fontWeight="bold" fontSize="1rem">
        Summary
      </Typography>
      <Divider sx={{ marginY: ".5rem" }} />
      <div onClick={handleOpen}>
        <Typography
          fontSize="0.8rem"
          dangerouslySetInnerHTML={{ __html: summary.summary }}
        />
      </div>
      <SummaryDetailsModal
        open={openSummaryDetails}
        handleClose={handleClose}
        onSubmit={onSubmit}
        summaryFormHook={summaryFormHook}
      />
    </Box>
  );
};

export default Summary;
