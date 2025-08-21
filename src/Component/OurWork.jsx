import React from "react";
import { motion } from "framer-motion";


const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurWork = () => {
  const steps = [
    {
      icon: "fas fa-ear-listen",
      title: "Consultation",
      text: "We listen to your concerns, provide clear diagnosis before starting work.",
      animation: slideLeft,
    },
    {
      icon: "fas fa-wrench",
      title: "Strategy",
      text: "Our experts outline the best repair approach without compromising quality.",
      animation: slideRight,
    },
    {
      icon: "fas fa-layer-group",
      title: "Implementation",
      text: "Using top-grade tools and parts, we carry out the repairs.",
      animation: slideLeft,
    },
    {
      icon: "fas fa-wand-magic-sparkles",
      title: "Final Result",
      text: "Your phone is restored to peak performance, looking and working like new.",
      animation: slideRight,
    },
  ];

  return (
    <div className="bg-white overflow-x-clip mb-20">
      <div className="text-center px-4">
        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
          # Our Work
        </div>
        <h1 className="font-extrabold text-center text-3xl tracking-tighter bg-black text-transparent bg-clip-text mt-6">
          Our Proven <span className="text-blue-800">Work Process</span>
        </h1>
      </div>

      
      <div className="  flex flex-col 
  md:flex-row md:justify-center md:items-center md:gap-6 
  ipad:flex-col ipad:items-center ipad:gap-8 
  px-4 mt-10">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="bg-white p-6 w-full md:w-64 flex-shrink-0 text-center"
              variants={step.animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="inline-flex items-center justify-center bg-blue-800 p-4 rounded-full">
                <i className={`${step.icon} text-white`}></i>
              </div>
              <h1 className="font-bold mt-2">{step.title}</h1>
              <p className="text-sm text-black/70 mt-2">{step.text}</p>
            </motion.div>

            
            {index < steps.length - 1 && (
              <>
                <hr className="hidden ipad:hidden md:block w-px h-20 bg-gray-400 border-0" />
                <hr className="block ipad:block md:hidden w-full h-px bg-gray-400 border-0 mx-auto my-4" />
                
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OurWork;