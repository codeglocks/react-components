import { useState } from "react"
import './toggle.css'

const ToggleSwitch = () => {
   
    const [on, setOnState] = useState(false);
    const toggle = () => setOnState(o => !o);
    return (
        <div className="toggle">
        <button class={on ? 'on' : 'off'} on={on} onClick={toggle}>
        <span class="pin" />
        </button>
        </div>
  );
}

  export default ToggleSwitch;