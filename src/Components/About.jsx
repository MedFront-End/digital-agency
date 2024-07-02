import React, { useEffect } from "react";
import img from "../img/m2.png";
import { HiOutlineWifi, HiOutlineUserGroup } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="text-center py-12 px-6 lg:px-32">
      <h1 className="text-4xl font-semibold pb-12 text-center">About Us</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="content text-left w-full lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-right">
          <p className="text-2xl font-semibold pb-2">Specialist in advising clients on</p>
          <span className="text-2xl font-semibold pb-2 text-violet-600 leading-none">financial challenges</span>
          <p className="pt-10 pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur cum vitae,
            sunt assumenda est facere! Illum natus <br /> voluptatum itaque ktyi met.
          </p>

          <div className="box flex items-center justify-between gap-3 mb-8">
            <div className="border-2 border-violet-600 p-4 rounded-md flex items-center justify-center h-16 w-16 mt-2">
              <HiOutlineWifi className="text-violet-600 text-3xl" />
            </div>
            <div>
              <h1 className="font-semibold text-xl leading-loose">First working process</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa officia exercitationem aliquid eius tempora youtikbo betoll cum alias iure.
              </p>
            </div>
          </div>

          <div className="box flex items-center justify-between gap-3 mb-8">
            <div className="border-2 border-violet-600 p-4 rounded-md flex items-center justify-center h-16 w-16 mt-2">
              <HiOutlineUserGroup className="text-violet-600 text-3xl" />
            </div>
            <div>
              <h1 className="font-semibold text-xl leading-loose">Dedicated team</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa officia exercitationem aliquid eius tempora youtikbo betoll cum alias iure.
              </p>
            </div>
          </div>

          <div className="box flex items-center justify-between gap-3 mb-8">
            <div className="border-2 border-violet-600 p-4 rounded-md flex items-center justify-center h-16 w-16 mt-2">
              <BiSupport className="text-violet-600 text-3xl" />
            </div>
            <div>
              <h1 className="font-semibold text-xl leading-loose">24/7 Hours support</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa officia exercitationem aliquid eius tempora youtikbo betoll cum alias iure.
              </p>
            </div>
          </div>
        </div>

        <div className="image w-full lg:w-1/2" data-aos="fade-left">
          <img src={img} alt="photo" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
