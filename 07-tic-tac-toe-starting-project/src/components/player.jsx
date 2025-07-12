import { useState } from "react";

export default function Player({initialName , symbol , isActive , onChangeName}) {

  const [editBtn , setBtn] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEdit() {
    setBtn((editing) => !editing);

    if(editBtn) {
    onChangeName(symbol, name);
    }
    // not use this  : that use the same old value twice
    // setBtn(!editBtn); schedule a state update to true
    // setBtn(!editBtn);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  let playerName = <span className="player-name">{name}</span>

  if(editBtn) {
    playerName = <input type="text" required defaultValue={name} onChange={handleChange} />;
  }


  return (
    <li className={isActive ? "active" : ''}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{editBtn ? "Save" : "Edit"}</button>
    </li>
  );
}
