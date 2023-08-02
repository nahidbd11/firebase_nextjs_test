import Image from "next/image";
import React from "react";
import Input from "./Input";
import { AiOutlineMail } from "react-icons/ai";
import { MdPassword, MdOutlineLocationOn } from "react-icons/md";
const SignUp = () => {
  return (
    <div className="flex sm:flex-row   w-1/2 drop-shadow-lg bg-my-black h-[70vh] ">
      {/* left part */}

      <div className="w-2/3 flex flex-col  gap-y-8  items-center px-8 py-4 group ">
        <h4 className="text-sm  text-my-white-shade-1">
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
      <div className="w-full bg-white flex flex-col  gap-y-3  items-center px-8  rounded-bl-3xl rounded-tl-3xl">
        <h2 className="text-2xl text-black mt-8">
          <span className="text-green-500 ">Create</span> your account
        </h2>

        <div className="space-y-3 mt-8">
          <Input
            {...{
              type: "text",
              placeholder: "Email",
              icon: <AiOutlineMail className="text-my-black" />,
            }}
          />

          <Input
            {...{
              type: "password",
              placeholder: "Password",
              icon: <MdPassword className="text-my-black" />,
            }}
          />
          <Input
            {...{
              type: "text",
              placeholder: "Location",
              icon: <MdOutlineLocationOn className="text-my-black" />,
            }}
          />
          <div>
            <button className="mt-4 w-full rounded-md bg-my-black text-white opacity-70  hover:opacity-100 transition-all duration-150 ease-linear p-2 ">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
