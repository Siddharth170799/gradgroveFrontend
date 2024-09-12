// import { useState } from "react";
import Header from "./Header";
function Signup() {
  // const [isStudent, setIsStudent] = useState(true);
  return (
    <div className="bg-custom-blue min-h-screen flex justify-center">
      <div className="w-8/12">
        <Header />
        <div className="flex flex-col justify-center text-center font-playfair">
          <div className="my-6 text-white text-3xl py-3">
            Time to create your profile
          </div>
          <div className=" text-white text-sm font-playfair ">
            Time to create your profile
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
