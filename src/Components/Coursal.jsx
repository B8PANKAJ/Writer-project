import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Coursal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-screen bg-gray-100 flex justify-center items-center">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: false }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://images.unsplash.com/photo-1622519624366-1b06e2f2aa0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJvb2tzfGVufDB8fDB8fHww"
              alt="Nature 1"
              className="w-full h-full object-cover max-h-screen object-center"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-1000 ${
                activeIndex === 0 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">
                Beautiful Nature 1
              </h2>
              <p className="text-md md:text-xl mt-2">
                Experience the serenity of nature
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://images.unsplash.com/photo-1629470937928-5f873c06005c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJvb2tzfGVufDB8fDB8fHww"
              alt="Nature 2"
              className="w-full h-full object-cover max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-1000 ${
                activeIndex === 1 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">
                Majestic Mountains
              </h2>
              <p className="text-md md:text-xl mt-2">
                Feel the power of the mountains
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://images.unsplash.com/photo-1488953763695-c4a79ecf4727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJvb2tzfGVufDB8fDB8fHww"
              alt="Nature 3"
              className="w-full h-full object-cover max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-1000 ${
                activeIndex === 2 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">Serene Lakes</h2>
              <p className="text-md md:text-xl mt-2">
                Peaceful reflections on the water
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://images.unsplash.com/photo-1474291102916-622af5ff18bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJvb2tzfGVufDB8fDB8fHww"
              alt="Nature 4"
              className="w-full h-full object-cover max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-1000 ${
                activeIndex === 3 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">
                Enchanted Forest
              </h2>
              <p className="text-md md:text-xl mt-2">
                Discover the magic within the woods
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10">
        <button
          className="swiper-button-prev text-white bg-transparent p-2 rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10">
        <button
          className="swiper-button-next text-white bg-transparent p-2 rounded-full"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Coursal;
