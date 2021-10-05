import React from "react";
import "./App.css";
import ToggleSwitch from "./components/Toggle/toggle";
import Button from "./components/Button/Button";
import ButtonCreative from "./components/StyledButton/Button";
import ToggleSwitch2 from "./components/ToggleSwitch/ToggleSwitch"

function App() {
  return (
    <div>
      <h1>Components showcase</h1>
      <Button title="Click me" />
      <ToggleSwitch />
      <ButtonCreative children="New Button" />
      <ButtonCreative btnColor="blue" type="outline">
        Outline Button
      </ButtonCreative>

      <ToggleSwitch2 id="a02" name="Toggle" onChange={e => console.log("onToggle")}/>
    </div>
  );
}

export default App;
