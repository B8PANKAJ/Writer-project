import React, { useEffect } from "react";
import Coursal from "../Components/Coursal";
import AllCoursal from "../Components/AllCoursal";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.main
      className="mt-7"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div variants={fadeInUp}>
        <Coursal />
      </motion.div>

      <motion.div className="bg-white mt-3" variants={fadeInUp}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-700 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers, and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers, and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://via.placeholder.com/500x600"
              alt="dummy content 1"
            />
          </div>
        </div>
      </motion.div>

      <motion.div className="text-center p-10" variants={fadeIn}>
        <h1 className="font-bold text-4xl mb-4">Recent Publications</h1>
      </motion.div>

      <motion.div
        className="flex justify-center flex-wrap items-center"
        variants={fadeInUp}
      >
        <motion.div
          className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
        >
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">CHAMOMILLE</div>
            <div className="text-gray-300 uppercase tracking-widest">
              NATURAL, OIL
            </div>
            <div className="text-gray-400 mt-8">
              <p className="font-bold">39.00 MLC</p>
              <p>Perfect everywhere</p>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </motion.div>
        <motion.div
          className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
        >
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">CHAMOMILLE</div>
            <div className="text-gray-300 uppercase tracking-widest">
              NATURAL, OIL
            </div>
            <div className="text-gray-400 mt-8">
              <p className="font-bold">39.00 MLC</p>
              <p>Perfect everywhere</p>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </motion.div>
        <motion.div
          className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
        >
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">CHAMOMILLE</div>
            <div className="text-gray-300 uppercase tracking-widest">
              NATURAL, OIL
            </div>
            <div className="text-gray-400 mt-8">
              <p className="font-bold">39.00 MLC</p>
              <p>Perfect everywhere</p>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </motion.div>
      </motion.div>

      <motion.div className="text-center p-10" variants={fadeIn}>
        <h1 className="font-bold text-4xl mb-4">Recent Books Launched</h1>
      </motion.div>

      <motion.div
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        variants={fadeIn}
      >
        <motion.div
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
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
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto hover:text-blue-500">
                  <FiDownload size={20} />
                </div>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
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
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto hover:text-blue-500">
                  <FiDownload size={20} />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
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
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto hover:text-blue-500">
                  <FiDownload size={20} />
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeIn}>
        <AllCoursal />
      </motion.div>
    </motion.main>
  );
};

export default HomePage;
