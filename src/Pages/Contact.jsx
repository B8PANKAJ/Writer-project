import React, { useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="max-w-screen-[80vw] mt-6 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="flex flex-col justify-between">
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Let&apos;s talk about everything!
          </h2>
          <div className="text-gray-700 mt-8">
            Hate forms? Send us an <span className="underline">email</span>{" "}
            instead.
          </div>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          variants={fadeInUp}
        ></motion.div>
      </div>

      <motion.div variants={fadeInUp}>
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">
            Full Name
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Email
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Message
          </span>
          <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mt-8">
          <motion.button
            className="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline flex justify-center items-center hover:bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Send Message</span> <FiSend />
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
