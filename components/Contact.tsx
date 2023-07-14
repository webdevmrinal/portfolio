import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl  md:text-3xl lg:text-4xl">
          {"I've got just what you need. "}
          <span className="border-b-2 border-[#9c45ff]/80">
            Lets&nbsp;Talk.
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#9c45ff] h-7 w-7 animate-pulse" />
            <p>+91&nbsp;700&nbsp;402&nbsp;6301</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#9c45ff] h-7 w-7 animate-pulse" />
            <p>mrinal.webdev@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#9c45ff] h-7 w-7 animate-pulse" />
            <p>123 Developer Lane</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="w-full flex space-x-2">
            <input placeholder="Name" className="contactInput w-full" type="text" />
            <input placeholder="Email" className="contactInput w-full" type="text" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#9c45ff] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
