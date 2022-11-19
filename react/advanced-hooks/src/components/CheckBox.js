import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log("use effect");
    localStorage.setItem("checkbox-value", checked);
  });
  useEffect(() => {
    txtInputRef.current.focus();
  }, []);

  const txtInputRef = useRef();
  // useLayoutEffect(() => {
  //   console.log("use layout effect");
  // }, []);
  return (
    <>
      <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)} />
      {checked ? "checked" : "not checked"}
      <input type="text" ref={txtInputRef} />
    </>
  );
}
