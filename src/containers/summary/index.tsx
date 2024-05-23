import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SummaryDetailsModal from "./summaryDetailsModal";
import { DevTool } from "@hookform/devtools";
export interface ISummaryFormValues {
  primarySkill: string;
  summary: string;
  "#exp": string;
}
const defaultSummary =
  "Praveen Jayanth, a seasoned React developer, adeptly crafts robust, user-centric web applications. Proficient in harnessing React's power, he brings creativity and precision to frontend development, ensuring seamless user experiences. With a keen eye for detail and a passion for innovation, Praveen collaborates effectively in dynamic teams, driving projects from conception to execution. Dedicated to staying abreast of emerging technologies, he continuously refines his skills to deliver cutting-edge solutions that exceed expectations.";

const Summary = () => {
  const [openSummaryDetails, setOpenSummaryDetails] = React.useState(false);
  const handleOpen = () => setOpenSummaryDetails(true);
  const handleClose = () => setOpenSummaryDetails(false);
  const [summaryFormData, setSummaryFormData] = useState<ISummaryFormValues>({
    primarySkill: "",
    summary: defaultSummary,
    "#exp": "",
  });
  const summaryFormHook = useForm<ISummaryFormValues>({
    defaultValues: {
      summary: defaultSummary,
    },
  });
  const { handleSubmit, control } = summaryFormHook;
  const onSubmit = handleSubmit((data) => {
    console.log("data", data);
    setSummaryFormData(data);
    handleClose();
  });
  console.log(summaryFormData);

  return (
    <Box marginTop={2}>
      <Typography fontWeight="bold" fontSize="1rem">
        Summary
      </Typography>
      <Divider sx={{ marginY: ".5rem" }} />
      <div onClick={handleOpen}>
        <Typography>{summaryFormData.summary}</Typography>
      </div>

      <SummaryDetailsModal
        open={openSummaryDetails}
        handleClose={handleClose}
        onSubmit={onSubmit}
        summaryFormHook={summaryFormHook}
      />
      <DevTool control={control} />
    </Box>
  );
};

export default Summary;
