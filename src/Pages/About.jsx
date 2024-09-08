import React, { useEffect } from "react";
import { FaStar, FaCircle, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section className="text-gray-700 body-font">
      <motion.div
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={fadeIn}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Author
            <br className="hidden lg:inline-block" />
            More....
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link to="/Contact">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Go to Contact
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          variants={fadeIn}
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600/edf2f7/a5afbd"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-gray-700 body-font border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <motion.div
            className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
            variants={fadeIn}
          >
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/600x600/edf2f7/a5afbd"
            />
          </motion.div>

          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col mb-10 lg:items-start items-center"
              variants={fadeIn}
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <FaStar className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Book 1
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a
                  className="mt-3 text-indigo-500 inline-flex items-center"
                  href="#"
                >
                  Go To Book
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col mb-10 lg:items-start items-center"
              variants={fadeIn}
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <FaCircle className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Book 2
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a
                  className="mt-3 text-indigo-500 inline-flex items-center"
                  href="#"
                >
                  Go To Book
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex flex-col mb-10 lg:items-start items-center"
              variants={fadeIn}
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <FaUserAlt className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Book 3
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a
                  className="mt-3 text-indigo-500 inline-flex items-center"
                  href="#"
                >
                  Go To Book
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
