import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="mt-24 md:mt-auto lg:mt-28 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <Image
          className="rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt=""
          height={128}
          width={128}
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Google</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="rounded-full"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            }
            alt=""
            height={40}
            width={40}
          />
          <Image
            className="rounded-full"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            }
            alt=""
            height={40}
            width={40}
          />
          <Image
            className="rounded-full"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            }
            alt=""
            height={40}
            width={40}
          />
          {/* TechStack */}
          {/* TechStack */}
          {/* TechStack */}
        </div>
        <p className="uppercase py-5 text-gray-300">Start Date-End Date</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
