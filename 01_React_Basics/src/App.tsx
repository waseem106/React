import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [listData, setListData] = useState({ name: "", email: "" });

  function mysubmit(e: any): void {
    e.preventDefault();
    // setName(e.target.elements.name.value)  // we can do like this but it shows previous values
    // setEmail(e.target.elements.email.value) //same for here
    console.log("state ", name, email);
    console.log("list ", listData);
  }

  useEffect(() => {
    setListData({ name, email });
  }, [name, email]);

  return (
    <>
      <form
        onSubmit={mysubmit}
        className="flex text-black flex-col items-center justify-center gap-3 mt-5 border-2 p-9 w-[40%] ml-[30%]"
      >
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-full p-2 rounded-sm border-2 hover:outline-blue-500 focus:outline-blue-500 "
        />
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-sm  border-2 focus:outline-blue-500"
        />
        <button
          type="submit"
          className="py-2 px-4 rounded bg-blue-500 w-full p-3 text-black hover:bg-blue-400"
        >
          Submit
        </button>
        {name && email && (
          <>
            <p>Name:{name ? name : "Empty"}</p>
            <p>Email:{email ? email : "Empty"}</p>
          </>
        )}
      </form>
      <Counter/>
    </>
  );
}

export default App;
