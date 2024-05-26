import { Box } from "@mui/material";
import React from "react";

import { useAppSelector } from "../../store/store";
import AdditionalTextReadOnly from "./additionalTextReadOnly";
import FullContent from "./fullContent";

const AdditionalContent = () => {
  const { additionalContent } = useAppSelector(
    (state) => state.additionalContent
  );

  return (
    <>
      {additionalContent?.map((item) => (
        <FullContent item={item} key={item.id} />
      ))}
    </>
  );
};

export default AdditionalContent;
