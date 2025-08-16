import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../Component/Asset/SecondNewImage.webp";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id='About'
    className="mb-20 bg-white overflow-x-clip">
      <motion.div
        className=
        "container flex flex-col ipad:flex-col md:flex-row items-center gap-10 md:gap-20 max-w-[90%] md:max-w-[80%] mx-auto text-center md:text-left"
        
        id="Hero"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="
            flex-shrink-0 w-full sm:w-[380px] md:w-[420px] flex justify-center md:justify-start
            [@media(min-width:768px)and(max-width:1024px)]:mx-auto
          "
          variants={fadeUp}
        >
          <img
            src={HeroImg}
            alt="HeroImg"
            className="
              rounded-lg border-blue-800 w-full sm:w-[380px] md:w-[420px] h-auto
              [@media(min-width:768px)and(max-width:1024px)]:max-w-[360px]
            "
          />
        </motion.div>

        <motion.div variants={container} className="w-full">
          <motion.div
            className="text-xs sm:text-sm inline-flex border border-[#222]/30 px-2 sm:px-3 py-1 rounded-lg tracking-tight"
            variants={fadeUp}
          >
            # About Us
          </motion.div>

          <motion.h1
            className="font-extrabold text-2xl sm:text-3xl tracking-tighter bg-black text-transparent bg-clip-text mt-4"
            variants={fadeUp}
          >
            Transforming Phones{" "}
            <span className="text-blue-800">Like Nothing Happened</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-black/60 tracking-tight mt-4 sm:mt-6"
            variants={fadeUp}
          >
            We understand how important your phone is to your daily life, so we
            work quickly to get you reconnected without compromising on quality.
            Your device is in safe hands with us.
          </motion.p>

          <motion.div
            className="
              flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center md:justify-start mt-6 sm:mt-[30px]
              [@media(min-width:768px)and(max-width:1024px)]:flex-wrap
              [@media(min-width:768px)and(max-width:1024px)]:gap-4
            "
            variants={fadeUp}
          >
            <div className="text-center">
              <h2 className="text-blue-800 text-xl sm:text-2xl font-extrabold">
                100+
              </h2>
              <p className="text-xs sm:text-sm text-black/80">Team Workers</p>
            </div>

            <hr className="hidden sm:block w-px h-16 bg-gray-400 border-0 [@media(min-width:768px)and(max-width:1024px)]:hidden" />

            <div className="text-center">
              <h2 className="text-blue-800 text-xl sm:text-2xl font-extrabold">
                2000+
              </h2>
              <p className="text-xs sm:text-sm text-black/80">Happy Clients</p>
            </div>

            <hr className="hidden sm:block w-px h-16 bg-gray-400 border-0 [@media(min-width:768px)and(max-width:1024px)]:hidden" />

            <div className="text-center">
              <h2 className="text-blue-800 text-xl sm:text-2xl font-extrabold">
                99%
              </h2>
              <p className="text-xs sm:text-sm text-black/80">
                Client Satisfaction
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-4 text-center md:text-left"
            variants={fadeUp}
          >
            <h1 className="font-medium font-pacifico text-base sm:text-lg">
              Florence Terigbade
            </h1>
            <p className="text-xs sm:text-sm text-blue-800">
              Florence Terigbade &bull; CEO
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;