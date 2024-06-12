import React from "react";

import { useAppSelector } from "../../store/store";
import FullContent from "./fullContent";

const AdditionalContent = () => {
  const { additionalContent } = useAppSelector((state) => state.resume);

  return (
    <>
      {additionalContent?.map((item) => (
        <FullContent item={item} key={item.id} />
      ))}
    </>
  );
};

export default AdditionalContent;
