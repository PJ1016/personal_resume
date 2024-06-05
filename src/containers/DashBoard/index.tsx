import React from "react";
import HeaderMenu from "../../components/menu";

import PersonalInfoForm from "./personalInfoForm";
import { useAppSelector } from "../../store/store";
import ExperienceForm from "./experienceForm";
import Home, { NotToPrint } from "../home";

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
            <Home />
          </div>
        );
    }
  };
  return (
    <div>
      <NotToPrint>
        <HeaderMenu />
      </NotToPrint>

      <div style={{ padding: "2rem" }}>{renderFormOnStep()}</div>
    </div>
  );
};

export default DashBaord;
