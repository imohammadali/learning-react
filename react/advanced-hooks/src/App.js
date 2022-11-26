import { useEffect, useState } from "react";
import "./App.css";
import { PureCate as Cat } from "./components/Cat";
import CheckBox from "./components/CheckBox";
import { useAnyKeyToRender } from "./components/hooks";
import { List } from "./components/list";
import { Numbers } from "./components/Number";
import { Phrase } from "./components/Phrase";
import { User } from "./components/User";
import { WordCount } from "./components/WordCount";

function App() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 },
  ];
  return (
    <>
      <List
        data={tahoe_peaks}
        renderEmpty={<p>this list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation.toLocaleString()}ft
          </>
        )}
      />
    </>
  );
}

export default App;
