
function Button({name,color="blue",handler}) {
  return (
      <button className={` p-5 border-2 rounded-md text-black hover:bg-${color}-700 w-[7rem] h-[4rem] shadow-lg`}
        onClick={()=>handler(color)}
        style={{backgroundColor:`${color}`}}
      >{name}</button>
  )
}

export default Button
