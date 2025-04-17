import { useCallback, useEffect, useRef, useState } from "react";

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

  const passwordRef = useRef(null);

  const copytoClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    // console.log("Memory reference of the function",passwordGenerator)
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-gray-100 to-gray-300 text-black px-4">
    <div className="flex flex-col w-full max-w-md border border-gray-300 rounded-2xl shadow-lg bg-white p-6 gap-6">
      <h2 className="text-2xl font-semibold text-center text-blue-700">
         Password Generator
      </h2>
  
      <div className="flex gap-3 w-full">
        <input
          type="text"
          name="Password"
          value={password}
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 text-black outline-none"
          readOnly
          ref={passwordRef}
        />
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          onClick={copytoClipboard}
        >
          Copy
        </button>
      </div>
  
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Length: {length}</label>
        <input
          type="range"
          name="Range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-2/3"
        />
      </div>
  
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="Number"
          onChange={() => setNumber((prev) => !prev)}
          checked={number}
          className="w-4 h-4"
        />
        <label className="text-sm">Include Numbers</label>
      </div>
  
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={character}
          name="Character"
          onChange={() => setCharacter((prev) => !prev)}
          className="w-4 h-4"
        />
        <label className="text-sm">Include Special Characters</label>
      </div>
    </div>
  </div>
  
  );
}
export default PasswordGenerate;
