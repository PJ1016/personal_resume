import React from "react";
import AdditionalTextReadOnly from "./additionalTextReadOnly";
import {
  updateContent,
  type IContent,
} from "../../store/slices/additionalContentSlice";
import { useForm } from "react-hook-form";
import AdditionalContentModal from "./additionalContentModal";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { DevTool } from "@hookform/devtools";
interface IFullContent {
  item: IContent;
}
const FullContent = ({ item }: IFullContent) => {
  const dispatch = useAppDispatch();
  const additionalContentForm = useForm<IContent>({
    defaultValues: item,
  });
  const { additionalContent } = useAppSelector(
    (state) => state.additionalContent
  );
  const { handleSubmit, control } = additionalContentForm;

  const [openAdditionalContentDetails, setOpenAdditionalContentDetails] =
    React.useState(false);
  const handleOpen = () => setOpenAdditionalContentDetails(true);
  const handleClose = () => setOpenAdditionalContentDetails(false);
  const onSubmit = handleSubmit((data) => {
    const updatedData = additionalContent.map((item) => {
      if (item.id === data.id) return { ...data };
      else return { ...item };
    });
    console.log(additionalContent, data);
    dispatch(updateContent(updatedData));
    handleClose();
  });
  return (
    <>
      <AdditionalTextReadOnly item={item} handleOpen={handleOpen} />
      <AdditionalContentModal
        open={openAdditionalContentDetails}
        handleClose={handleClose}
        onSubmit={onSubmit}
        additionalFormHook={additionalContentForm}
      />
      <DevTool control={control} />
    </>
  );
};

export default FullContent;
