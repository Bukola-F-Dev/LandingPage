import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section id='Hero'
      className="relative pt-32 md:pt-40 pb-0 overflow-x-clip bg-no-repeat bg-right bg-contain"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 25, 60, 0.8), rgba(10, 25, 60, 0.8)), url('/NewHeroImage.webp')",
        backgroundPosition: "right center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container max-w-[90%] md:max-w-[80%] mx-auto mt-6 md:mt-10 flex flex-col md:flex-row items-center relative z-10 gap-6 md:gap-0">
        
        <motion.div
          className="max-w-full md:max-w-[580px] text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-xs sm:text-sm text-white inline-flex border border-white/20 px-2 sm:px-3 py-1 rounded-lg tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Experience The Best IT Solutions
          </motion.div>

          <motion.h1
            className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tighter text-white bg-clip-text mt-4 sm:mt-6 leading-[2.2rem] sm:leading-[2.5rem] md:leading-[3rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Restoring Your Connection to the World, Your Device, Our Expertise
          </motion.h1>

          <motion.p
            className="text-white/80 tracking-tight mt-4 sm:mt-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Our experienced technicians provide fast, reliable, and affordable
            repairs using high-quality parts to keep your device performing like
            new. We’ve got you covered — your device is in safe hands with us.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center mt-6 sm:mt-[30px] mb-10 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <button className="bg-blue-800 text-xs sm:text-sm hover:bg-blue-500 hover:text-black text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center tracking-tight w-full sm:w-auto">
            <a href="#About">Explore More</a>
            </button>
            <div className="inline-flex gap-1 items-center">
              <button className="text-white text-xs sm:text-sm hover:text-gray-300 bg-transparent">
              <a href="#Service">View Our Services</a>
              </button>
              <i className="fas fa-arrow-right text-xs sm:text-sm hover:text-gray-300 text-white h-3 w-4 inline-flex justify-center items-center"></i>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex-1 hidden md:block"></div>
      </div>

      <Navbar />
    </section>
  )
}

export default Hero