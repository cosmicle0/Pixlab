import Image from "next/image";
import React from "react";
import graphic1 from "../../../public/graphic1.png";

const AboutUs = () => {
  return (
    <section className="  text-white flex justify-center items-center h-auto my-[15%] w-full">
      <div className="w-[80%] justify-between flex items-center max-md:w-full max-md:m-4">
        <div className="flex flex-1 flex-col justify-start items-start  ">
          <h1 className="text-4xl">
            <span className="text-red-500 font-bold">About</span> Us
          </h1>
          <p className="my-4 max-md:whitespace-pre-line text-xl ">
          Pixlab is a dynamic website development agency specializing in creating visually stunning and highly functional websites. Our team of expert developers and designers harnesses the latest technologies to build responsive, user-friendly, and SEO-optimized websites tailored to your business needs. From e-commerce platforms to corporate websites, Pixlab delivers innovative solutions that enhance online presence and drive engagement, all while ensuring affordability and exceptional quality.
          </p>
          {/* <button className="bg-red-600 px-4 py-2 rounded mt-4">
            Order Now
          </button> */}
        </div>
        <div className="flex flex-1 justify-end items-end  max-md:hidden">
          <Image src={graphic1} width={500} alt="About us graphic" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
