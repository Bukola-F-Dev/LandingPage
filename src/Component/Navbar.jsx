import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute left-0 z-10 top-0 w-full">
   
             {/*<div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-5 top-0">
                <p className="text-white/60 hidden md:block">
                    Because Every Second Without Your Phone Matters.
                </p>
               <div className="inline-flex gap-3 items-center">
                    <p className="text-white"><a href="#Service">View Our Services</a></p>
                    <i className="fas fa-arrow-right text-white h-3 w-4 inline-flex justify-center items-center"></i>
                </div>*/}
        
            <div className="py-6 max-w-[80%] mx-auto">
                <div className="container">
                    <div className="flex items-center justify-between">
                      

                        <p className="text-xl font-extrabold text-white md:text-2xl">PhoneTech&bull;</p>

                       
                        <ul className="hidden lg:flex gap-10 text-white text-sm items-center">
    <a href="#Hero" className="cursor-pointer hover:text-gray-300">Home</a>
    <a href="#About" className="cursor-pointer hover:text-gray-300">About</a>
    <a href="#Service" className="cursor-pointer hover:text-gray-300">Services</a>
    <a href="#Contact" className="cursor-pointer hover:text-gray-300">Contact Us</a>
    <button className="bg-blue-800 text-white px-4 py-2 rounded-full font-medium 
        inline-flex items-center justify-center hover:bg-blue-500 hover:text-black tracking-tight">
        Explore More
    </button>
</ul>

{/* Hamburger Icon */}
<button
    className="lg:hidden text-white text-2xl focus:outline-none"
    onClick={() => setIsOpen(!isOpen)}
>
    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
</button>
                    </div>

    {/* Mobile Menu */}
    {isOpen && (
        <div
        className={`lg:hidden fixed top-0 right-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
        {/* Close Button */}
        <button
        className="absolute top-6 right-12 text-2xl text-white bg-blue-800 p-1 rounded-full focus:outline-none"
        onClick={() => setIsOpen(false)}
        >
        <i className="fas fa-times"></i>
        </button>
    
        {/* Nav Links */}
        <div className="flex flex-col py-6 max-w-[80%] mx-auto justify-center h-full gap-6">
        <a
            href="#Hero"
            className="cursor-pointer text-xl font-medium hover:text-gray-500"
            onClick={() => setIsOpen(false)}
        >
            Home
        </a>
        <a
            href="#About"
            className="cursor-pointer text-xl font-medium hover:text-gray-500"
            onClick={() => setIsOpen(false)}
        >
            About
        </a>
        <a
            href="#Service"
            className="cursor-pointer text-xl font-medium hover:text-gray-500"
            onClick={() => setIsOpen(false)}
        >
            Services
        </a>
        <a
            href="#Contact"
            className="cursor-pointer text-xl font-medium hover:text-gray-500"
            onClick={() => setIsOpen(false)}
        >
            Contact Us
        </a>
        <div className="inline-flex gap-3 items-center">
        <p className="text-black text-xl font-medium cursor-pointer hover:text-gray-500"
        onClick={() => setIsOpen(false)}>
       <a href='#About'>Explore More</a>  </p>
       <i className="fas fa-arrow-right text-black h-3 w-4 inline-flex justify-center items-center"></i> 
    </div>
        </div>
    </div>
)}
                </div>
            </div>
        </header>
    );
};

export default Navbar;