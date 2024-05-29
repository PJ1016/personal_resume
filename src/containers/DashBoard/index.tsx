import React from "react";
import HeaderMenu from "../../components/menu";
import { Typography } from "@mui/material";

import PersonalInfoForm from "./personalInfoForm";
import { useAppSelector } from "../../store/store";
import FormFooter from "./FormFooter";

const DashBaord = () => {
  const { activeStep } = useAppSelector((state) => state.activeStepper);

  const renderFormOnStep = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfoForm />;
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
      <div style={{ padding: "2rem" }}>
        <Typography fontWeight="bold" fontSize="2rem">
          COMPLETE YOUR RESUME HEADING
        </Typography>
        <Typography fontSize="1rem">
          Employers will use this information to contact you.
        </Typography>
        {renderFormOnStep()}
      </div>
    </div>
  );
};

export default DashBaord;
