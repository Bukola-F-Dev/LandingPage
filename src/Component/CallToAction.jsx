import React, { useState } from "react";
import { motion } from 'framer-motion'

const CallToAction = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Only allow gmail.com or yahoo.com
    return /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/i.test(email);
  };
 
  //allow custom emails, and other form of emails
  //const pattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  //return pattern.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setStatus("Please use a valid Gmail or Yahoo email.");
      // Clear message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
      return;
    }

    setStatus({ type: "sending", message: "Sending..." });

    try {
      const res = await fetch("https://landingpagebackend-7q1r.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json(); 
        setStatus({ type: "error", message: data.error || "Failed to send message" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error, please try again." });
    }

    // Clear message after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div id='Contact'
    className="bg-gray-100 overflow-x-clip pb-20">
      <div className="max-w-[80%] mx-auto">
        <div className="max-w-2xl bg-gray-100 rounded-lg">
          <motion.h2 
          animate={{
            backgroundPositionX: '-100%',
          }}
          transition={{
            duration:2,
            repeat:Infinity,
            ease:"linear",
            repeatType: "loop",
          }}
          className="text-3xl pt-20 font-bold mb-2 bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#00008b,#71C2EF,#00008b,#D07DDF,#E1CD86,#BBCB92,#71C2EF,#00008b)] [background-size:200%] text-transparent bg-clip-text">
            Send Us A Message
          </motion.h2>
          <p className="text-black mb-6 text-sm">
            Give us a chance to get you reconnected, We Fix Phones, Fast and Right.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex-1">
                <label className="block text-sm text-blue-800 font-semibold mb-1">
                  Name
                </label>
                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded outline-none"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm text-blue-800 font-semibold mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-blue-800 font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border rounded resize-none outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="outline-none bg-blue-800 hover:bg-blue-500 hover:text-black text-white text-xs sm:text-sm px-4 py-2 rounded-full font-medium inline-flex items-center justify-center tracking-tight w-full sm:w-auto"
             >
              Send Message
            </button>
            {status && (
  <p className={`mt-2 text-xl ${
    status.type === "success" ? "text-green-600" :
    status.type === "error" ? "text-red-600" :
    "text-blue-600"
  }`}>
    {status.message}
  </p>
)}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;