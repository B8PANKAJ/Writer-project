import React, { useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import AllCoursal from "../Components/AllCoursal";
import { motion } from "framer-motion";

const AllBooks = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section>
      <motion.div
        className="bg-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
          variants={fadeInUp}
        >
          <div className="font-light text-gray-700 sm:text-lg">
            <motion.h2
              className="mb-4 text-4xl tracking-tight font-extrabold text-black"
              variants={fadeInUp}
            >
              We didn't reinvent the wheel
            </motion.h2>
            <motion.p className="mb-4" variants={fadeInUp}>
              We are strategists, designers, and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need.
            </motion.p>
            <motion.p variants={fadeInUp}>
              We are strategists, designers, and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8"
            variants={fadeInLeft}
          >
            <img
              className="w-full rounded-lg"
              src="https://via.placeholder.com/200x200"
              alt="dummy content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://via.placeholder.com/200x200"
              alt="dummy content 2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center p-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="font-bold text-4xl mb-4">
          Authors All Books for Reference Download
        </h1>
        <h1 className="text-3xl">All Books</h1>
      </motion.div>

      <motion.div
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src="https://via.placeholder.com/500x600"
                alt="Book"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto hover:text-blue-500">
                    <FiDownload size={20} />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <AllCoursal />
    </section>
  );
};

export default AllBooks;
