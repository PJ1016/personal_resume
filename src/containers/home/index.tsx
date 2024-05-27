import React from "react";
import styled from "styled-components";
import PersonalDetails from "../personalDetails";
import Summary from "../summary";
import Education from "../education";
import WorkExperience from "../work";
import AdditionalContent from "../additionalContent";
import { Button, Stack } from "@mui/material";
import { useAppDispatch } from "../../store/store";
import { addContent } from "../../store/slices/additionalContentSlice";
import CommentSection from "../commentSection";
const HomeWrapper = styled.div`
  border: 1px solid;
  padding: 1rem;
`;
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
      <HomeWrapper>
        <PersonalDetails />
        <Summary />
        <Education />
        <WorkExperience />
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
      </HomeWrapper>
      <NotToPrint>
        <CommentSection />
      </NotToPrint>
    </>
  );
};

export default Home;
