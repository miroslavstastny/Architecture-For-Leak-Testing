import * as React from "react";
import { DetailsListFabric } from "./DetailsListFabric";
import { PopupWithMenu } from "./StardustPopupWIthMenu";
import { AttachmentTest } from "./StardustAttachment";

export const ChildComponent = () => {
  const [state, setState] = React.useState(0);

  const changeState = React.useCallback(() => {
    setState(state => state + 1);
  }, []);

  return (
    <>
      <button onClick={changeState}>Click here to set</button>

      {state === 2 ? <AttachmentTest /> : <span> {state} </span>}
    </>
  );
};
