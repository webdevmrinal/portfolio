import React from "react";
import atlassianPhoto from "../public/1688815405352.png";
// import profileImage from "../public/35590070.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative z-10 h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: false }}
        className="mt-16 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full overflow-hidden md:rounded-lg md:mt-0 md:w-64 md:h-96 lg:mt-0 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          className="h-full w-full object-cover"
          src={atlassianPhoto}
          alt=""
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#9c45ff]/90">little</span>{" "}
          background.
        </h4>
        <p className="text-sm">
          {`Howdy! I'm Mrinal😃, the software engineer who brings the cool
          factor to the table. I effortlessly transform complex codes into works of art,
          blending technical prowess with a touch of creativity. Rocking my favorite programming-themed tees
          and spreading laughter all around, I'm your go-to problem-solving and
          mentoring companion. Join me on this exhilarating coding ride, where
          brilliance and coolness walk hand in hand!`}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
