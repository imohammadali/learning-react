import { useEffect, useState } from "react";
import "./App.css";
import { PureCate as Cat } from "./components/Cat";
import CheckBox from "./components/CheckBox";
import { useAnyKeyToRender } from "./components/hooks";
import { Numbers } from "./components/Number";
import { Phrase } from "./components/Phrase";
import { User } from "./components/User";
import { WordCount } from "./components/WordCount";

function App() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <Cat key={i} name={name} meow={(name) => console.log(`${name} has meowed`)} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>add a Cat</button>
    </>
  );
}

export default App;
