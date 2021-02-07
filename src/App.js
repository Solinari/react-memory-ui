import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  let test = Array.apply(null, Array(24));
  return (
    <div className="App">
      <div className="App-Board">
        {test.map((a, i) => {
          console.log(i);
          return <Card cardId={`${i}`} key={`${i}`} />;
        })}
      </div>
    </div>
  );
}

export default App;
