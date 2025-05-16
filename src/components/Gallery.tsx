"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  EffectCards,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import { motion } from "framer-motion";

// Install icons if needed: npm install @heroicons/react
import {  ArrowRightIcon } from "@heroicons/react/24/outline";

const BrandingCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = [
    { id: 1, image: "/images/mockup-7.png", alt: "Branding Visual 1" },
    { id: 2, image: "/images/mockup-6.jpg", alt: "Branding Visual 2" },
    { id: 3, image: "/images/mockup-5.jpg", alt: "Branding Visual 3" },
    { id: 4, image: "/images/mockup-4.jpg", alt: "Branding Visual 4" },
  ];

  const slidesB = [
    { id: 1, image: "/images/color-gallery.png", alt: "Branding Visual 1" },
    { id: 2, image: "/images/branding-2.png", alt: "Branding Visual 2" },
    { id: 3, image: "/images/branding-3.jpeg", alt: "Branding Visual 3" },
  ];
  const slidesC = [
    { id: 1, image: "/images/services-bg-2.jpeg", alt: "Branding Visual 1" },
    { id: 2, image: "/images/branding-2.png", alt: "Branding Visual 2" },
    { id: 3, image: "/images/branding-3.jpeg", alt: "Branding Visual 3" },
  ];
  const slidesD = [
    { id: 1, image: "/images/100279.jpg", alt: "Branding Visual 1" },
    { id: 2, image: "/images/wall-2.png", alt: "Branding Visual 2" },
    { id: 3, image: "/images/branding-3.jpeg", alt: "Branding Visual 3" },
  ];

  return (
    <section className="relative py-20 bg-gray-100/20 w-full items-center justify-center overflow-x-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url(/images/bw-gallery.png)] bg-no-repeat bg-cover bg-fixed " />

      {/* Blurred Overlay Layer */}
      <div className="absolute inset-0 backdrop-blur-xs" />

      <div className=" relative center w-full h-full top-5  z-10">
        <h1 className="text-center text-4xl text-white text-[40pt] font-bold">
          Our Gallery
        </h1>
      </div>
      {/*carousel 01*/}
      <div className=" relative md:flex  m-20 md:m-0">
        <motion.div
          initial={{ opacity: 0, y: 0, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative container mx-auto px-4 w-full md:w-1/4 mt-8 float-left"
        >
          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination, Keyboard, EffectCards]}
              spaceBetween={1}
              centeredSlides={true}
              loop={true}
              effect={"cards"}
              grabCursor={true}
              keyboard={{ enabled: true }}
              navigation={{
                prevEl: ".carousel-prev",
                nextEl: ".carousel-next",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: "auto",
                  centeredSlides: true,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="swiper-container overflow-hidden relative"
            >
              {slides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="w-[90vw] md:w-[60vw]  transition-transform duration-300"
                >
                  <div className="relative aspect-2/3 overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-cover object-center "
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
              
            </Swiper> 
        <div className="relative flex top-20 left-100 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer gap-2.5">
        <ArrowRightIcon className="h-6 w-6 text-white " />
    
        </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full md:w-[30vw] mx-auto md:mx-0 md:right-1/6 md:relative z-10 p-4 mt-0 md:mt-50 text-center md:text-left "
        >
          <h2 className="text-[18pt] md:text-[56pt]  text-white font-bold mb-4 md:leading-tight ">
            Coltive Studios&apos; Branding
          </h2>
          <p className="text-white text-base md:text-xl">
            Our visual identity reflects our creative spirit, and we&apos;re
            excited to share the elements that bring our brand to life.
          </p>
        </motion.div>
      </div>
      {/*carousel 02*/}
      <div className="relative md:flex  m-20 md:m-0">
        <motion.div
          initial={{ opacity: 0, y: 0, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.9 }}
          className="w-full md:w-[35vw] md:mx-0 md:top-20 md:left-1/4 relative z-10 text-center md:text-left p-4  md:bg-secondary/65 md:h-90 border-l-accent border-l-8"
        >
          <h2 className="text-[18pt] md:text-[56pt] text-white font-bold mb-4 leading-tight text-center md:text-right ">
            Coltive Studios&apos; Branding
          </h2>
          <p className="text-white md:text-xl text-center md:text-right md:w-100 md:float-right text-[10pt]">
            Our visual identity reflects our creative spirit, and we&apos;re
            excited to share the elements that bring our brand to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 0, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative container md:mx-auto md:px-4 w-100 md:w-1/2 mt-8 -left-1/3 md:-left-0"
        >
          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              spaceBetween={1}
              centeredSlides={true}
              loop={true}
              keyboard={{ enabled: true }}
              navigation={{
                prevEl: ".carousel-prev",
                nextEl: ".carousel-next",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: "auto",
                  centeredSlides: true,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="swiper-container overflow-hidden relative"
            >
              {slidesB.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="w-[90vw] md:w-[60vw] p-5 md:p-20 transition-transform duration-300"
                >
                  <div className="relative aspect-square rounded-3xl overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-cover object-center p-5 rounded-full"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination bullets */}
            <div className="flex justify-center mt-6 space-x-2 swiper-pagination" />
          </div>
        </motion.div>
      </div>
      {/*carousel 03*/}
      <div className="h-[100vh]  md:flex  m-20 md:m-0">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Vertical lines */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-white/5"
              style={{ left: `${(i + 1) * 10}%` }}
            />
          ))}

          {/* Horizontal lines */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-white/5"
              style={{ top: `${(i + 1) * 12.5}%` }}
            />
          ))}
        </div>
        <div className="relative bg-primary/5 md:flex md:w-full md:items-center md:justify-center  md:h-100 border-b-accent-3 border-b-8 top-1/3 ">
          <motion.div
            initial={{ opacity: 0, y: 0, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full md:w-[30vw] mx-auto md:mx-0 md:left-50 relative text-center md:text-left p-4 "
          >
            <h2 className="text-[18pt] md:text-[56pt] text-white font-bold mb-4 leading-tight">
              Coltive Studios&apos; Branding
            </h2>
            <p className="text-white text-base md:text-xl">
              Our visual identity reflects our creative spirit, and we&apos;re
              excited to share the elements that bring our brand to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative container mx-auto px-4 w-100 md:w-1/2 mt-8 -left-1/3 md:-left-0"
          >
            <div className="relative group ">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Keyboard,
                  EffectCreative,
                  Autoplay,
                ]}
                spaceBetween={1}
                centeredSlides={true}
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                keyboard={{ enabled: true }}
                navigation={{
                  prevEl: ".carousel-prev",
                  nextEl: ".carousel-next",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                  },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="swiper-container overflow-hidden relative"
              >
                {slidesC.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="w-[90vw] md:w-[60vw] p-5 md:p-0 transition-transform duration-300"
                  >
                    <div className="relative aspect-video verflow-hidden">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center "
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination bullets */}
              <div className="flex justify-center mt-6 space-x-2 swiper-pagination" />
            </div>
          </motion.div>
        </div>
      </div>
      {/*carousel 04*/}
      <div className="relative md:flex  m-20 md:m-0">
        <motion.div
          initial={{ opacity: 0, y: 0, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative container mx-auto px-4 w-100 md:w-1/2 mt-8 right-1/3 md:right-0"
        >
          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              spaceBetween={1}
              centeredSlides={true}
              loop={true}
              keyboard={{ enabled: true }}
              navigation={{
                prevEl: ".carousel-prev",
                nextEl: ".carousel-next",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: "auto",
                  centeredSlides: true,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="swiper-container overflow-hidden relative"
            >
              {slidesD.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="w-[90vw] md:w-[60vw] p-5 md:p-20 transition-transform duration-300"
                >
                  <div className="relative aspect-square rounded-3xl overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-cover object-center p-5 rounded-full"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination bullets */}
            <div className="flex justify-center mt-6 space-x-2 swiper-pagination" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.9 }}
          className="w-full md:w-[35vw] md:mx-0 md:top-20 md:right-1/4 relative z-10 text-center md:text-left p-4 md:bg-accent-3/65 h-50 md:h-90 border-r-accent border-r-8"
        >
          <h2 className="text-[18pt] md:text-[56pt] text-white font-bold mb-4 leading-tight text-center md:text-right ">
            Coltive Studios&apos; Branding
          </h2>
          <p className="text-white  md:text-xl text-center md:text-right md:w-100 float-right text-[10pt]">
            Our visual identity reflects our creative spirit, and we&apos;re
            excited to share the elements that bring our brand to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingCarousel;
