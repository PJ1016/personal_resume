import React, { useRef, type ReactInstance } from "react";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";
import PersonalDetails from "../personalDetails";
import Summary from "../summary";
import Education from "../education";
import WorkExperience from "../work";
import AdditionalContent from "../additionalContent";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../store/store";
import { addContent } from "../../store/slices/additionalContentSlice";
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
  const componentRef = useRef<any>();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current as ReactInstance,
    documentTitle: "MyDocument",
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 20mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    `,
  });

  return (
    <div ref={componentRef}>
      <HomeWrapper>
        <PersonalDetails />
        <Summary />
        <Education />
        <WorkExperience />
        <AdditionalContent />
        <NotToPrint>
          <Button variant="contained" onClick={handleAddContent}>
            Add content
          </Button>
          <Button variant="contained" onClick={handlePrint}>
            Download as PDF
          </Button>
        </NotToPrint>
      </HomeWrapper>
    </div>
  );
};

export default Home;
