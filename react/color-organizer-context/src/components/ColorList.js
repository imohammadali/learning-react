import Color from "./Color";
import { useColors } from "../providers/ColorProvider";
export default function ColorList() {
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
