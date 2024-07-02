import React from "react";
import m3 from "../img/m3.png";
import m4 from "../img/m4.png";
import m5 from "../img/m5.png";
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
  return (
    <div className="px-6 md:px-12 lg:px-32 pb-16 bg-violet-200">
      <h1 className="text-4xl font-semibold pb-12 text-center pt-14">Our blog</h1>
      <p className="text-2xl font-semibold pb-2 text-center">
        Let's have a look from our <span className="text-2xl font-semibold text-violet-600">recent blog</span>
      </p>

      <div className="boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        <div className="box shadow-[0_0_0_2px_rgba(0,0,0,0.2)] p-4 text-left bg-white">
          <img className="w-full" src={m3} alt="Blog 1" />
          <p className="pb-6">To know about work. Watch some videos f....</p>
          <a href="###"><FaArrowRight className="text-violet-600" /></a>
        </div>

        <div className="box shadow-[0_0_0_2px_rgba(0,0,0,0.2)] p-4 text-left bg-white">
          <img className="w-full" src={m4} alt="Blog 2" />
          <p className="pb-6">Do you want to improve the way your brand interacts with customers? Let's talk....</p>
          <a href="###"><FaArrowRight className="text-violet-600" /></a>
        </div>

        <div className="box shadow-[0_0_0_2px_rgba(0,0,0,0.2)] p-4 text-left bg-white">
          <img className="w-full" src={m5} alt="Blog 3" />
          <p className="pb-6">Boost your conversation rate with us....</p>
          <a href="###"><FaArrowRight className="text-violet-600" /></a>
        </div>
      </div>
    </div>
  );
}
