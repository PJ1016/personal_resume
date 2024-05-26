import React, { useState } from "react";
import ReactQuill from "react-quill";
const TextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      {value}
    </>
  );
};

export default TextEditor;
