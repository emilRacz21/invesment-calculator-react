import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

let labels = [
  { title: "INITIAL INVESMENT", name: "initial", value: 15000 },
  { title: "ANNUAL INVESMENT", name: "annual", value: 1200 },
  { title: "EXPECTED RETURN", name: "return", value: 6 },
  { title: "DURATION", name: "duration", value: 10 },
];

function App() {
  const [items, setItems] = useState(labels);

  function handleInputValue(event) {
    const { name, value } = event.target;
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.name === name) {
          return { ...item, value: Number(value) };
        }
        return item;
      });
    });
  }

  return (
    <>
      <Header />
      <main>
        <UserInput onSelect={handleInputValue} labels={items} />
        <Result results={items} />
      </main>
    </>
  );
}

export default App;
