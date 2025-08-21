import React from "react";
import { motion } from "framer-motion";
import Phone_Screen from '../Component/Asset/PhoneScreen.webp'
import Battery from '../Component/Asset/Battery.webp'
import Phone_Hardware from '../Component/Asset/PhoneHardware.webp'
 

const Service = () => {
  return (
 
    <div id='Service' className="bg-gray-100 overflow-x-clip mb-20">
      <div className="pt-16 sm:pt-20 max-w-[90%] md:max-w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="text-xs sm:text-sm inline-flex border border-[#222]/10 px-2 sm:px-3 py-1 rounded-lg tracking-tight">
            # Our Services
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mt-4 md:mt-0 text-center md:text-left">
          <motion.h1
            className="font-extrabold text-2xl sm:text-3xl tracking-tighter bg-black text-transparent bg-clip-text mt-2 md:mt-6 leading-snug"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Services We Provide to{" "}
            <br className="hidden sm:block" />
            <span className="text-blue-800">
              Keep You Connected Without Stress
            </span>
          </motion.h1>

          <motion.button
            className="bg-blue-800 hover:bg-blue-500 hover:text-black text-white text-xs sm:text-sm px-4 py-2 rounded-full font-medium inline-flex items-center justify-center tracking-tight w-full sm:w-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            View Our Services
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap items-stretch gap-6 pt-8 sm:pt-10 pb-12 sm:pb-20 max-w-[90%] md:max-w-[80%] mx-auto">
        {[
          {
            image: Phone_Screen,
            title: "Screen Repair & Replacement",
            text: "Cracked or unresponsive screens don’t have to slow you down. We provide fast, reliable screen repair and replacement for all phone brands, using high quality parts that bring your device back to life in no time."
          },
          {
            image: Battery,
            title: "Battery Repair & Replacement",
            text: "If your phone struggles to hold a charge or drains too quickly, it’s time for a battery check. We’ll run a full diagnostic and replace faulty batteries with premium replacements to restore your phone’s all day power."
          },
          {
            image: Phone_Hardware,
            title: "Water Damage & Hardware Fixes",
            text: "Dropped your phone in water or facing hardware malfunctions? Our expert technicians carefully diagnose and repair water damage, faulty speakers, cameras, and charging ports to get your phone working like new again."
          }
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white md:hover:border-b-[6px] hover:border-blue-800 p-6 rounded-lg flex-1 h-full min-w-[250px] sm:min-w-[200px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-full overflow-hidden rounded-lg">
              <img src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover mb-4"></img>
            </div>
            <h1 className="font-bold mt-2">{service.title}</h1>
            <p className="text-sm text-black/70 mt-2">{service.text}</p>
            <div className="inline-flex gap-1 mt-6 items-center">
              <button className="text-sm text-black/90 bg-transparent">
                Learn more
              </button>
              <i className="fas fa-arrow-right text-sm text-black/90 h-3 w-4 inline-flex justify-center items-center"></i>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
 
  );
};

export default Service;