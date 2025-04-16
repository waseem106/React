import React, { useCallback, useEffect, useState } from "react";

function PasswordGenerate() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    } 
    if (character) {
      str += "!@#$%^&*()~[]{}";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log("password", pass);
    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <div className="flex flex-wrap flex-col w-screen h-screen items-center justify-center bg-gray-600 text-white ">
      <div className="flex flex-col w-[80%] text-xl border-2 items-center gap-10 md:w-[50%] ">
        <h2>Password Generator</h2>

        <div className="flex gap-2 w-full p-5">
          <input
            type="text"
            name="Password"
            value={password}
            className="rounded-md w-[100%] outline text-black "
            readOnly
          />
          <button className="border-2 p-2 rounded-md">Copy</button>
        </div>

        <div className="flex gap-3">
          <input
            type="range"
            name="Range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length:{length}</label>
        </div>

        <div className="flex gap-3">
          <input
            type="checkbox"
            name="Number"
            onChange={() => setNumber(prev=>!prev)}
            checked={number}
          />
          <label>Number</label>
        </div>

        <div className="flex gap-3">
          <input
            type="checkbox"
            checked={character}
            name="Character"
            onChange={() => setCharacter(prev=>!prev)}
          />
          <label>Chracters</label>
        </div>
      </div>
    </div>
  );
}
export default PasswordGenerate;
