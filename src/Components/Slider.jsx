import React from "react";
// 1. Импортируем компоненты и модули Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banya from "../assets/banya.webp";
import fishing from "../assets/fishing.webp";
import sup from "../assets/sup.webp";
import children from "../assets/children.webp";
import baggi from "../assets/baggi.avif";
import yurta from "../assets/yurta.webp";
import yoga from "../assets/yoga.webp";

// 2. Импортируем необходимые стили Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { address: banya, alt: "Травяная баня" },
  { address: fishing, alt: "Рыбалка на озере" },
  { address: sup, alt: "Катание на сапах" },
  { address: children, alt: "Детский веревочный парк" },
  { address: baggi, alt: "Катание на багги" },
  { address: yurta, alt: "Чаепитие у юрты" },
  { address: yoga, alt: "Йога на озере" },
];

const PhotoSlider = () => {
  return (
    <div className="w-full p-4 mx-auto max-w-[1600px]">
      <h2 className="mb-4 text-xl font-bold text-center text-green-700 md:text-2xl">
        Галерея
      </h2>

      <Swiper
        // Подключение модулей
        modules={[Navigation, Pagination, Autoplay]}
        // Базовые настройки
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Бесконечная прокрутка
        // Навигация и пагинация
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // Адаптивность (Breakpoints)
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="shadow-lg rounded-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-64 overflow-hidden rounded-lg group md:h-80 lg:h-[600px]">
              <img
                src={img.address}
                alt={img.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                <p className="text-lg font-semibold text-white">{img.alt}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
