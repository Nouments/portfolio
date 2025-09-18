import "./landing.css"

function Landing() {
  return (
   <div className=" w-3/5 flex justify-center   border-indigo-100 shadow-2xl h-2/3  ">
    <div className=" grid grid-cols-2 gap-0 w-full rounded-l-4xl">
              <div className="w-full flex items-center font-ubuntu justify-center rounded-l-4xl"><p className="font-ubuntu text-4xl font-bold">test1</p></div>
              <div className="w-full bg-blue-600 flex items-center  justify-center "><p className="font-ubuntu font-bold text-4xl text-white">test2</p></div>
    </div>
   </div>
  );
}

export default Landing;
