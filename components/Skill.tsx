import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          className="rounded-full border border-gray-500 object-cover md:w-24 md:h-24 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt=""
          height={50}
          width={50}
        />
      </motion.div>
      <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-24 md:w-24 xl:h-24 xl:w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-base md:text-3xl xl:text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
