import React from "react";
import PersonalDetailsContent from "./personalDetailsContent";
import PersonalDetailsModal from "./personalDetailsModal";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/store";
import {
  defaultPersonalDetail,
  setPersonalDetail,
  type PersonalDetailState,
} from "../../store/slices/personalDetailSlice";

const PersonalDetails = () => {
  const [openPersonalDetails, setOpenPersonalDetails] = React.useState(false);
  const handleOpen = () => setOpenPersonalDetails(true);
  const handleClose = () => setOpenPersonalDetails(false);
  const dispatch = useAppDispatch();
  const personalDetailHook = useForm<PersonalDetailState>({
    defaultValues: defaultPersonalDetail,
  });
  const { handleSubmit } = personalDetailHook;

  const onSubmit = handleSubmit((data) => {
    dispatch(setPersonalDetail(data));
    handleClose();
  });
  return (
    <>
      <PersonalDetailsContent handleOpen={handleOpen} />
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
