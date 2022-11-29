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
import { faker } from "@faker-js/faker";
import { FixedSizeList } from "react-window";
function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 },
  ];
  const bigList = [...Array(5000)].map(() => ({
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  }));
  const renderItem = (item) => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );
  return (
    <FixedSizeList height={window.innerHeight} width={window.innerWidth - 20} itemCount={bigList.length} itemSize={50}>
      {renderRow}
    </FixedSizeList>
  );
}

export default App;
