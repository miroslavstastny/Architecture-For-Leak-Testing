import * as React from "react";
export const ChildComponent = () => {
  const [state, setState] = React.useState(0);

  const changeState = React.useCallback(() => {
    setState(state => state + 1);
  }, []);

  return (
    <>
      <button onClick={changeState}>Click here to set</button>

      {<span> {state} </span>}
    </>
  );
};
