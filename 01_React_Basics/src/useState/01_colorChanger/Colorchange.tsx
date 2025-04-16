import { useState } from "react";
import Button from "./Button";

function Colorchange() {

    
    const [bgcolor,setbgColor]=useState('#F5F5F5')
    
    function clickHandler(color){
        setbgColor(color)
        console.log(color)
    }

  return (
    <div className="flex flex-row flex-wrap gap-3 p-8 h-screen w-screen justify-center" style={{backgroundColor:`${bgcolor}`}}>
   
      <Button 
      name="Blue"
      color="blue"
      handler={clickHandler}
      />
      <Button
      name="Yellow"
      color="Yellow"
      handler={clickHandler}
      />
      <Button
      name="Pink"
      color="Pink"
      handler={clickHandler}
      />
      <Button
      name="Gray"
      color="Gray"
      handler={clickHandler}
      />
      <Button
      name="Voilet"
      color="#BB2649"
      handler={clickHandler}
      />

    </div>
  );
}

export default Colorchange;
