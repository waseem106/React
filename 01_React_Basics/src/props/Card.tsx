import { ObjectType } from "./dummydata";



type cardProps={             //we wrapp prop into cardprop type because we arre getting a object under a object 
  objdata:ObjectType
}

// like this {
//   objdata: {
//     img: "...",
//     title: "...",
//     details: "...",
//     buttontxt: "..."
//   }
// }     so we applied the type on that recieving object 




// export default function Card({objdata}:cardProps) {
// we can also do like this 
export default function Card({objdata}:{objdata:ObjectType}){

    // console.log(arrdata)
    // console.log("object",objdata)
    
  return (
    <div className=" max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={objdata.img}
        alt="Default img"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{objdata.title?objdata.title:"title"}</h3>
        <p className="text-gray-600 mb-4">
         {objdata.details?objdata.details:"Details"}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
        {objdata.buttontxt?objdata.buttontxt:"Button"}
        </button>
      </div>
    </div>
  );
}
