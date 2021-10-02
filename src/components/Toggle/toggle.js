import { useState } from "react"
import './toggle.css'

const ToggleSwitch = () => {
   
    const [on, setOnState] = useState(false);
    const toggle = () => setOnState(o => !o);
    return (
        <div className="toggle">
        <button className={on ? 'on' : 'off'} onClick={toggle}>
        <span className="pin" />
        </button>
        {on ? "SwitchedOn" : "SwitchedOff"}
        </div>
  );
}

  export default ToggleSwitch;