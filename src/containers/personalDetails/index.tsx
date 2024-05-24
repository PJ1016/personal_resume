import React, { useState } from "react";
import PersonalDetailsContent from "./personalDetailsContent";
import PersonalDetailsModal from "./personalDetailsModal";
import { useForm } from "react-hook-form";
export interface PersonalDetailsForm {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailAddress: string;
  address: string;
  linkedInAddress: string;
}
const PersonalDetails = () => {
  const [openPersonalDetails, setOpenPersonalDetails] = React.useState(false);
  const handleOpen = () => setOpenPersonalDetails(true);
  const handleClose = () => setOpenPersonalDetails(false);
  const personalDetailHook = useForm<PersonalDetailsForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      emailAddress: "",
      address: "",
      linkedInAddress: "",
    },
  });
  const { handleSubmit } = personalDetailHook;
  const [formData, setFormData] = useState<PersonalDetailsForm>({
    firstName: "Praveen Jayanth",
    lastName: "Kamatham",
    mobileNumber: "9494039564",
    emailAddress: "praveen.jayanth.1111@gmail.com",
    address: "Hyderabad",
    linkedInAddress: "www.linkedin.com/in/praveen-jayanth-8b0687199",
  });
  const onSubmit = handleSubmit((data) => {
    setFormData(data);
    handleClose();
  });
  return (
    <>
      <PersonalDetailsContent formData={formData} handleOpen={handleOpen} />
      <PersonalDetailsModal
        open={openPersonalDetails}
        handleClose={handleClose}
        onSubmit={onSubmit}
        personalDetailHook={personalDetailHook}
      />
    </>
  );
};

export default PersonalDetails;
