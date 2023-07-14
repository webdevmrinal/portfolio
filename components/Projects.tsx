import React from "react";
import Image from "next/image";
import proj1 from "../public/proj1.png";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-14 md:p-44 h-screen"
            key={project}
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <Image src={proj1} alt="" width={600} height={300} />
            </motion.div>
            <div className="space-y-10 px-0 lg:px-10 max-w-6xl">
              <h4 className="text-xl text-center md:text-3xl lg:text-4xl font-semibold">
                <span className="border-b-4 border-[#9c45ff]/80">
                  Project {index + 1} of {projects.length}
                </span>
                &nbsp;:&nbsp;Netflix Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit laudantium natus molestiae, animi, odit repellat
                molestias ea totam possimus doloribus optio quibusdam facilis
                quod facere iste quam aspernatur odio maxime?
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#9c45ff]/10 left-0 h-[350px] -skew-y-12" />
    </div>
  );
}

export default Projects;
