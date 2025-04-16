import Card from "./Card";
import myobj from "./dummydata";
function Props() {
 

  let myArray = [1, 23, 234, 234];

  return (
    <div className="w-screen min-h-full flex flex-wrap items-center justify-center flex-row gap-6 mt-[10%]">
      {myobj.map((obj) => (
        <Card  objdata={obj} />
      ))}


      <Card  objdata={myobj}/>
    </div>
  );
}

export default Props;
