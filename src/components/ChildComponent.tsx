import * as React from "react";
import { Test } from "./Test";
import {DetailsListFabric} from "./DetailsListFabric";

export const ChildComponent = () => {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setState(state => state + 1);
      setTimeout(() => {
        setState(state => state + 1);
        setTimeout(() => {
          setState(state => state + 1);
        }, 500);
      }, 500);
    }, 5000);
  }, []);

  return (
    <>
      {state === 0 ? (
        <DetailsListFabric />
          
      ) : (
        <span> {state} </span>
      )}
    </>
  );
};