import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1596796867443-48bb5d2ebaa0"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#bd86ff]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem
          urna, semper eu lobortis vitae, faucibus id metus. Etiam varius
          hendrerit efficitur. Praesent sed ultrices odio, id laoreet augue.
          Nunc accumsan at ex nec auctor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla turpis lorem, volutpat sed ornare
          sed, tincidunt eget massa. Fusce non aliquet nisl, et volutpat justo.
          Suspendisse scelerisque tincidunt justo, et egestas purus convallis
          nec. In maximus ut nulla sed sodales. Etiam vitae urna sapien.
          Maecenas sagittis sapien non euismod sodales. Pellentesque aliquam,
          velit non sagittis sollicitudin, justo justo consequat diam, a
          pharetra metus libero at massa. Ut urna mauris, scelerisque eu orci
          ac, placerat cursus nisi. Integer id leo id mi vulputate dictum nec
          tincidunt tortor. Quisque placerat nisi eu massa fringilla, eget
          bibendum enim facilisis. Integer ornare velit erat, sed dictum ipsum
          tristique et.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
