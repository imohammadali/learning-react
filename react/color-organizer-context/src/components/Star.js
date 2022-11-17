import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => <FaStar onClick={onSelect} color={selected ? "red" : "grey"} />;
export default Star;
