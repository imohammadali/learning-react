import { useCallback, useEffect, useMemo } from "react";
import { useAnyKeyToRender } from "./hooks";

export function WordCount({ children = "" }) {
  useAnyKeyToRender();
  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);
  const words = useMemo(() => {
    const words = children.split(" ");
    return words;
  }, [children]);
  useEffect(() => {
    console.log("fresh render");
    fn();
  }, [fn]);
  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}
