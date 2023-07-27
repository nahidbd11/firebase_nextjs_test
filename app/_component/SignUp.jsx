import Image from "next/image";
import React from "react";
const SignUp = () => {
  return (
    <div className="flex sm:flex-row   w-1/2 drop-shadow-lg bg-blue-300 h-[70vh] ">
      {/* left part */}

      <div className="w-2/3 flex flex-col  gap-y-8  items-center px-8 py-4 group ">
        <h4 className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident, aliquid fugiat ipsam est architecto animi
        </h4>
        <Image
          src="/images/gb.png"
          width={1000}
          height={1000}
          className="group-hover:animate-pulse"
        />
      </div>

      {/* right part */}
      <div className="w-full bg-white flex flex-col justify-center items-center px-8 rounded-bl-3xl rounded-tl-3xl">
        <h2 className="text-4xl text-black">Create your account</h2>
      </div>
    </div>
  );
};

export default SignUp;
