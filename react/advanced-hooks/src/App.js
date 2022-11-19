import { useEffect } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";
import { useAnyKeyToRender } from "./components/hooks";
import { Phrase } from "./components/Phrase";
import { WordCount } from "./components/WordCount";

function App() {
  return <WordCount>You are not going to believe this but...</WordCount>;
}

export default App;
