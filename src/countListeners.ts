let originalWindowAddEventListener: Function;
let originalWindowRemoveAddEventListener: Function;
let originalDocumentAddEventListener: Function;
let originalDocumentRemoveAddEventListener: Function;
let originalElementAddEventListener: Function;
let originalElementRemoveAddEventListener: Function;
let count = 0;
export const countEventListeners = (window: Window) => {
  countWindowEventListeners(window);
  countDocumentEventListeners(window.document);
  countElementEventListeners((window as any).Element);
  return resetListener(window);
};
const countDocumentEventListeners = (document: Document) => {
  originalDocumentAddEventListener = document.addEventListener;
  (document as any).addEventListener = function(
    eventName: string,
    callabck: Function
  ) {
    count++;
    console.log(
      `Adding document eventName:${eventName} function:${callabck.name} ${this}`
    );
    console.trace();
    originalDocumentAddEventListener.apply(this, arguments as any);
  };
  originalDocumentRemoveAddEventListener = document.removeEventListener;
  (document as any).removeEventListener = function(
    eventName: string,
    callabck: Function
  ) {
    count--;
    console.log(
      `removing document eventName:${eventName} function:${callabck.name} ${this}`
    );
    originalDocumentRemoveAddEventListener.apply(this, arguments as any);
  };
};
const countElementEventListeners = (elem: Element) => {
  originalElementAddEventListener = (elem as any).prototype.addEventListener;
  (elem as any).prototype.addEventListener = function(
    eventName: string,
    callabck: Function
  ) {
    count++;
    console.log(
      `Adding Element eventName:${eventName} function:${callabck.name} ${this}`
    );
    console.trace();
    originalElementAddEventListener.apply(this, arguments as any);
  };
  originalElementRemoveAddEventListener = (elem as any).prototype
    .removeEventListener;
  (elem as any).prototype.removeEventListener = function(
    eventName: string,
    callabck: Function
  ) {
    count--;
    console.log(
      `removing Element eventName:${eventName} function:${callabck.name} ${this}`
    );
    originalElementRemoveAddEventListener.apply(this, arguments as any);
  };
};
export const resetListener = (window: Window) => {
  return () => {
    (window as any).addEventListener = originalWindowAddEventListener
      ? originalWindowAddEventListener
      : window.addEventListener;
    (window as any).removeEventListener = originalWindowRemoveAddEventListener
      ? originalWindowRemoveAddEventListener
      : window.removeEventListener;
    const document = window.document;
    (document as any).addEventListener = originalDocumentAddEventListener
      ? originalDocumentAddEventListener
      : document.addEventListener;
    (document as any).removeEventListener = originalDocumentRemoveAddEventListener
      ? originalDocumentRemoveAddEventListener
      : document.removeEventListener;
    const elem = (window as any).Element;
    elem.prototype.addEventListener = originalElementAddEventListener
      ? originalElementAddEventListener
      : elem.prototype.addEventListener;
    elem.prototype.removeEventListener = originalElementRemoveAddEventListener
      ? originalElementRemoveAddEventListener
      : elem.prototype.removeEventListener;
  };
};
function countWindowEventListeners(window: Window) {
  originalWindowAddEventListener = window.addEventListener;
  originalWindowRemoveAddEventListener = window.removeEventListener;
  (window as any).addEventListener = function(
    eventName: string,
    callabck: Function
  ) {
    count++;
    console.log(
      `Adding window eventName:${eventName} function:${callabck.name} ${this}`
    );
    console.trace();
    originalWindowAddEventListener.apply(this, arguments as any);
  };
  (window as any).removeEventListener = function(
    eventName: string,
    callabck: Function
  ) {
    count--;
    this.console.log(
      `Removing  window eventName:${eventName} function:${callabck.name} ${this}`
    );
    originalWindowRemoveAddEventListener.apply(this, arguments as any);
  };
  (window as any).getCount = function() {
    this.console.log(count);
  };
}