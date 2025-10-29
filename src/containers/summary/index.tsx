// Summary.tsx
import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  Stack,
  Link,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "react-hook-form";
import {
  defaultSumamry,
  setSummary,
  type ISummaryState,
} from "../../store/slices/summarySlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import SummaryDetailsModal from "./summaryDetailsModal";
import { NotToPrint } from "../home";

/**
 * NOTE:
 * - This component expects `ISummaryState`, `defaultSumamry`, and `setSummary`
 *   to be defined in your summarySlice as in your project.
 * - It imports SummaryDetailsModal from the same folder (see file below).
 * - If you use a `NotToPrint` wrapper (from ../home), you can replace the inline NotToPrint span below.
 */

const Summary: React.FC = () => {
  const dispatch = useAppDispatch();
  const { summary } = useAppSelector((s) => s.summary);
  const [openSummaryDetails, setOpenSummaryDetails] = React.useState(false);

  const handleOpen = () => setOpenSummaryDetails(true);
  const handleClose = () => setOpenSummaryDetails(false);

  const summaryFormHook = useForm<ISummaryState>({
    defaultValues: {
      summary: summary?.summary ?? defaultSumamry,
    },
  });

  const { handleSubmit } = summaryFormHook;

  const onSubmit = handleSubmit((data) => {
    dispatch(setSummary(data));
    handleClose();
  });
  return (
    <Box marginY={2}>
      <Stack direction="row" spacing={1}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Summary
        </Typography>

        {/* Edit button hidden in print/PDF */}
        <NotToPrint>
          <Tooltip title="Edit summary">
            <IconButton
              size="small"
              onClick={handleOpen}
              aria-label="Edit summary"
            >
              <EditIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Tooltip>
        </NotToPrint>
      </Stack>

      <Divider sx={{ marginY: "6px", borderColor: "rgba(0,0,0,0.08)" }} />

      {/* Content area */}
      <Typography
        fontSize="0.8rem"
        dangerouslySetInnerHTML={{ __html: summary.summary }}
      />
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
