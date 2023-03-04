import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleChange = () => (
    setIsOn((isOn) => !isOn)
  )

  const color = isOn ? "red" : "white";

  return <button onClick={handleChange}
    style={{ background: color }}>
    {isOn ? "ON" : "OFF"}
  </button>;
}

export default Toggle;