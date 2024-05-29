import React from "react";
import HeaderMenu from "../../components/menu";
import { Typography } from "@mui/material";

import PersonalInfoForm from "./personalInfoForm";
import { useAppSelector } from "../../store/store";
import FormFooter from "./FormFooter";
import ExperienceForm from "./experienceForm";

const DashBaord = () => {
  const { activeStep } = useAppSelector((state) => state.activeStepper);

  const renderFormOnStep = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <ExperienceForm />;
      default:
        return (
          <div>
            Yet to be implemented <FormFooter />
          </div>
        );
    }
  };
  return (
    <div>
      <HeaderMenu />
      <div style={{ padding: "2rem" }}>{renderFormOnStep()}</div>
    </div>
  );
};

export default DashBaord;
