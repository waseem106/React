import React, { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../customHooks/useCurrencyInfo.ts";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  // console.log("testing", currencyInfo);

  const newInfo = currencyInfo[from] || {};
  
  const newOptions = Object.keys(newInfo);

  

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    console.log("new Info",newInfo)
    console.log("currencyInfo",newInfo[to])
    setConvertedAmount(amount * newInfo[to]);
  };

  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-[url(https://t3.ftcdn.net/jpg/08/41/14/90/240_F_841149027_kTb8imXJgfjVknPTDgOMMSW9GgOyZyYh.jpg)] bg-no-repeat bg-[100%,100%]">
      <div className="border p-10 rounded-md bg-transparent backdrop-blur-sm text-white flex flex-col">
        <h2 className="text-center mb-4 text-2xl font-bold">
          Currency Converter 💸💸
        </h2>
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={newOptions}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onClick={swap}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <button className="p-2 boder-2 border-black text-2xl" onClick={swap}>⬆️⬇️</button>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={newOptions}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          onClick={swap}
          amountDisable
        />
        <button
          className=" p-4 bg-blue-500 outline-none shadow-lg rounded-md mt-5 text-sm font-extralight"
          onClick={convert}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default CurrencyConverter;
