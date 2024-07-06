import { useState } from "react";

export default function TestComponent() {
  const [lamp, setLamp] = useState(false);

  const HandleLamp = () => {
    setLamp(lamp === true ? false : true);
  };

  return (
    <div>
      <button onClick={HandleLamp}>{lamp === false ? 'off' : 'on'}</button>
      {lamp === false ? <div> Lampu ini sedang Mati</div> : <div>Lampu ini sedang Hidup</div>}
    </div>
  );
}
