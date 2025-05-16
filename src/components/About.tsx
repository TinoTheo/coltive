"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative text-center justify-center items-center py-20 bg-white h-full w-full">

<div className="absolute inset-0 bg-white bg-no-repeat bg-cover bg-fixed" />

{/* Blurred Overlay Layer */}
<div className="absolute inset-0 backdrop-blur-xs" />

      <img
        src="/images/Sec and logo mark-19.png"
        alt="logo"
        className="absolute w-[3.5vw] left-[5%] top-2"
      />
      {/* Background spanning behind the cards */}
      <div className="relative center w-full h-full">
        <h1 className="text-center text-4xl text-black font-bold text-[40pt] ">
          About Us
        </h1>
        <p className="w-1/2 left-[50%] translate-[50%]">
          Coltive Studios is a creative partner that empowers individuals and
          businesses to unlock their full creative potential.
        </p>
      </div>

      {/* Card Container */}
      <div className="relative flex flex-wrap justify-center gap-6 z-10 mt-10 bg-cover w-fit left-[50%] top-[50%] translate-x-[-50%] ">
        <img
          src="/images/about-bg.jpeg"
          alt="about-bg"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        {[
          {
            title: "Vision",
            text: "We strive to provide the best solutions tailored to your needs.",
          },
          {
            title: "Our Core Values",
            text: "We uphold creativity, innovation, and customer-centric solutions.",
          },
          {
            title: "Mission",
            text: "Our mission is to inspire and enable creativity in all forms.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group w-80 h-[50vh] border-20 border-white overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Title Section */}
            <div className="flex flex-col items-center justify-center p-4 h-[75%] bg-black/60 transition-all duration-300 group-hover:bg-black/80 cursor-pointer">
              <motion.h3
                initial={{ opacity: 0, y: 0, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-xl font-bold text-white text-[40pt]"
              >
                {item.title}
              </motion.h3>
            </div>

            {/* Description Section (Always Visible) */}
            <div className="bg-accent w-full p-4 flex flex-col items-center justify-center relative transition-all duration-900 group-hover:bg-secondary group-hover:translate-y-0 translate-y-0 cursor-pointer ">
              <p className="text-black mt-2 opacity-100 transition-opacity duration-300">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
