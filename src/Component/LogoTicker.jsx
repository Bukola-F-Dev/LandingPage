import React from "react";
import { motion } from "framer-motion";


const LogoTicker = () => {
 
  
  const items = [
    "FAST REPAIRS",
    "EXPERT TECHNICIANS",
    "TRUSTED SERVICES",
    "FRIENDLY SUPPORT",
    "WE CAN FIX IT",
    "REPAIR WITH CARE",
    "REPAIRS YOU CAN RELY ON",
    "QUALITY PARTS",
    "AFFORDABLE PRICES",
  ];

  return (
    <div className="py-4 mb-20 bg-blue-800 text-white text-xl font-extrabold overflow-hidden">
      <div className="flex gap-10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-10 flex-none pr-14"
          animate={{ translateX: "-50%" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {[...items, ...items].map((text, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center gap-10 flex-none"
            >
              <p>{text}</p>
              <i className="fas fa-asterisk font-extrabold text-white h-3 w-4 inline-flex justify-center items-center"></i>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;