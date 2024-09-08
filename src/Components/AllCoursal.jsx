import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import Swiper autoplay styles
import { Autoplay } from "swiper/modules"; // Import Autoplay module

const AllCoursal = () => {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
    "https://via.placeholder.com/600x400?text=Image+5",
    "https://via.placeholder.com/600x400?text=Image+6",
    "https://via.placeholder.com/600x400?text=Image+7",
    "https://via.placeholder.com/600x400?text=Image+8",
    "https://via.placeholder.com/600x400?text=Image+9",
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000, // 3 seconds delay for autoplay
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllCoursal;
