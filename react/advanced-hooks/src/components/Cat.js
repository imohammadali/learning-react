import { memo } from "react";
function Cat({ name, meow = (f) => f }) {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
}
export const PureCate = memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name);
