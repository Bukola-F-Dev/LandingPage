import React from 'react'
import {motion} from "framer-motion";

const Footer = () => {

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

      const steps = [
        {
          icon: "fas fa-message",
          title: "florenceterigbade@gmail.com",
          text: "Write to us",
        },
        {
          icon: "fas fa-phone",
          title: "(+234) 704 742 1106",
          text: "Call Us (NIG)",
        },
        {
          icon: "fas fa-house",
          title: "Lagos, Nigeria",
          text: "Our Office",
        },
      ];

    return (
        <div>
             <div className="py-4 mb-0 bg-blue-800 text-white text-xl font-extrabold overflow-hidden">
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
  
        <div className='py-6 bg-blue-950'>
        <div>
        <div className="flex flex-col items-center justify-center text-center 
md:flex-row md:gap-6 
ipad:flex-col ipad:items-center ipad:gap-8 
px-4 mt-4 ipad:mt-6 md:mt-8 md:max-w-[80%] mx-auto gap-10">
  {steps.map((step, index) => (
    <React.Fragment key={index}>
     
      <div className="flex items-center gap-4 w-full ipad:w-full max-w-xs mx-auto text-left md:w-auto">
        <div className="inline-flex items-center justify-center bg-white/10 p-2 rounded-full">
          <i className={`${step.icon} text-white text-sm`}></i>
        </div>
        <div>
          <p className="text-sm text-white/70 mt-0">{step.text}</p>
          <h1 className="font-medium text-white">{step.title}</h1>
        </div>
      </div>
      {index < steps.length - 1 && (
        <hr className="hidden ipad:hidden md:block w-px h-12 bg-gray-400 border-0" />
      )}
    </React.Fragment>
  ))}
</div>
            </div>
            <div className='flex justify-center items-center gap-4 ipad:4 md:gap-6 text-white text-2xl mt-12 mb-10'>
      <i class="fa-brands fa-facebook hover:text-gray-300"></i> 
      <i class="fa-brands fa-whatsapp hover:text-gray-300"></i>
      <i class="fa-brands fa-instagram hover:text-gray-300"></i>
      <i class="fa-brands fa-tiktok hover:text-gray-300"></i>
    </div>
    <p className=" flex justify-center items-center text-white cursor-pointer text-sm m-0">Copyright @ 2025 - All Right reserved.</p>
            </div>
        </div>
        
    )
}

export default Footer


