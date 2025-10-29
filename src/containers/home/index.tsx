import React from "react";
import styled from "styled-components";
import PersonalDetails from "../personalDetails";
import Summary from "../summary";
import Education from "../education";
import WorkExperience from "../work";
import AdditionalContent from "../additionalContent";
import { Button, Stack } from "@mui/material";
import { useAppDispatch } from "../../store/store";
import { addContent } from "../../store/slices/resumeSlice";

export const NotToPrint = styled.span`
  @media print {
    display: none;
  }
`;
const Home = () => {
  const dispatch = useAppDispatch();
  const handleAddContent = () => {
    dispatch(
      addContent({
        id: Math.random().toString(),
        title: "Xxx",
        subHeader: "Xxx",
        startDate: "",
        endDate: "",
        content: "",
      })
    );
  };
  const downloadContent = () => {
    window.print();
  };

  return (
    <>
      <PersonalDetails />
      <Summary />
      <WorkExperience />
      <Education />
      <AdditionalContent />
      <NotToPrint>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleAddContent}>
            Add content
          </Button>
          <Button variant="contained" onClick={downloadContent}>
            Download as PDF
          </Button>
        </Stack>
      </NotToPrint>
    </>
  );
};

export default Home;
