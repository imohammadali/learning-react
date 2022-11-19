import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";

export default function CheckBox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  useEffect(() => {
    console.log("use effect");
    localStorage.setItem("checkbox-value", checked);
  });
  // useEffect(() => {
  //   txtInputRef.current.focus();
  // }, []);

  const txtInputRef = useRef();
  // useLayoutEffect(() => {
  //   console.log("use layout effect");
  // }, []);
  // function toggle() {
  //   setChecked((checked) => !checked);
  // }
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
      {/* <input type="text" ref={txtInputRef} /> */}
    </>
  );
}
