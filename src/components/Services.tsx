"use client";
import react from "react";
import styles from "./Services.module.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="relative text-center py-12 md:py-20  w-full px-4 md:px-0 h-full  bg-[url(/images/orange.jpg)] bg-fixed">
      
      <div className="absolute inset-0 bg-[url(/images/wall-2.png)] bg-no-repeat bg-cover bg-fixed" />

{/* Blurred Overlay Layer */}
<div className="absolute inset-0 backdrop-blur-lg" />

      <img
        src="/images/white-logo-mark.png"
        alt="logo"
        className="absolute left-4 md:left-[5%] w-12 md:w-[3.5vw] top-4 md:top-8"
      />

      <div className="relative w-full h-full py-8 md:py-16">
        <h1 className="text-4xl md:text-[40pt] font-bold text-white mb-4 md:mb-8">
          Our Services
        </h1>
        <p className="text-white mx-auto w-full md:w-1/2 px-4 md:px-0 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla.
        </p>
      </div>

      

      <div className="relative mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-10">
        {[
          {
            title: "BRANDING",
            bullets: [
              "Logo Design",
              "Website Design",
              "Visual Identity Design",
            ],
            bgImage: "/images/services-bg.jpeg",
          },
          {
            title: "GRAPHIC DESIGN",
            bullets: ["Business Cards", "Letterheads", "Brochures", "Posters"],
            bgImage: "/images/wall.png",
          },
        ].map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            key={index}
            className="relative group h-[40vh] md:h-[60vh] w-full overflow-hidden rounded-bl-[105px] rounded-tr-[105px]  rounded-tl-4xl rounded-br-4xl "
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.bgImage})` }} 
            />
            
            <div className="absolute inset-0 p-6 md:p-16 bg-black/10 hover:bg-black/80 transition-all duration-300">
              <h3 className="text-2xl md:text-[50pt] font-bold text-white mb-4">
                {item.title}
              </h3>
              <ul className="text-white space-y-2 md:space-y-4 text-base md:text-[20pt]" >
              <li>{item.bullets[0]}</li>
                <li>{item.bullets[1]}</li>
                <li>{item.bullets[2]}</li>
                <li>{item.bullets[3]}</li>
              </ul>
            </div>@
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;