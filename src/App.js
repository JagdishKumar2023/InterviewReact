import { useState } from "react";
import "./App.css";
// import { ListData } from "./components/ListData";
import UseEffectbasic from "./components/UseEffectbasic";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      {state ? <UseEffectbasic /> : ""}
      <button onClick={(e) => setState(!state)}>Toggle</button>
    </div>
  );
}

export default App;
