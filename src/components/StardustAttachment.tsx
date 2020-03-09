import * as React from "react";
import { Attachment } from "@fluentui/react";

export const AttachmentTest = () => {
  return (
    <Attachment
      onClick={() => {
        console.log("Clicked here");
      }}
    />
  );
};
