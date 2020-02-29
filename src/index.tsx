import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChildWindow } from "./components/App";


const WaitToRenderChildwindow = 1000;

function renderCleaner() {
  console.log("Render");
  // const div = window.document.createElement("div");
  // window.document.body.appendChild(div);
  // ReactDOM.render(
  // <>
  // <Cleaner />
  // <MouseEventCleaner mainWindow={window} />
  // </>, div);

  // ReactDOM.unmountComponentAtNode(div);
  // window.document.body.removeChild(div);
}

setTimeout(() => {
  ChildWindow(renderCleaner);
}, WaitToRenderChildwindow);