import React, { useEffect } from "react";
import { FaMobileAlt, FaLaptopCode, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Our() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="mt-52 pb-32 px-6 lg:px-32">
            <h2 className="text-4xl font-semibold pb-12 text-center md:pt-14">Our Services</h2>
            <h1 className="text-2xl font-semibold pb-2 text-center">Save time managing your businesses with</h1>
            <span className="text-2xl font-semibold text-violet-600 text-center block">Our best services</span>

            <div className="boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-16">

                <div className="box rounded-md shadow-[0_0_0_2px_rgba(0,0,0,0.2)] py-12 px-6" data-aos="fade-up">
                    <div className="flex items-center justify-center mb-4">
                        <div className="text-center rounded-md p-4 flex items-center justify-center  h-16 w-16 bg-violet-600">
                            <FaMobileAlt className="text-3xl text-white" />
                        </div>
                    </div>
                    <span className="text-violet-600 font-semibold text-xl leading-loose">App Development</span>
                    <p className="text-gray-600 leading-normal pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsum harum libero kiclo kodls amet lorty vincj dolorp.</p>
                </div>

                <div className="box rounded-md shadow-[0_0_0_2px_rgba(0,0,0,0.2)] py-12 px-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center justify-center mb-4">
                        <div className="text-center rounded-md p-4 flex items-center justify-center  h-16 w-16 bg-violet-600">
                            <FaLaptopCode className="text-3xl text-white" />
                        </div>
                    </div>
                    <span className="text-violet-600 font-semibold text-xl leading-loose">Web Design</span>
                    <p className="text-gray-600 leading-normal pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsum harum libero kiclo kodls amet lorty vincj dolorp.</p>
                </div>

                <div className="box rounded-md shadow-[0_0_0_2px_rgba(0,0,0,0.2)] py-12 px-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="flex items-center justify-center mb-4">
                        <div className="text-center rounded-md p-4 flex items-center justify-center  h-16 w-16 bg-violet-600">
                            <FaPaintBrush className="text-3xl text-white" />
                        </div>
                    </div>
                    <span className="text-violet-600 font-semibold text-xl leading-loose">Graphic Design</span>
                    <p className="text-gray-600 leading-normal pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsum harum libero kiclo kodls amet lorty vincj dolorp.</p>
                </div>

                <div className="box rounded-md shadow-[0_0_0_2px_rgba(0,0,0,0.2)] py-12 px-6" data-aos="fade-up" data-aos-delay="600">
                    <div className="flex items-center justify-center mb-4">
                        <div className="text-center rounded-md p-4 flex items-center justify-center  h-16 w-16 bg-violet-600">
                            <FaBullhorn className="text-3xl text-white" />
                        </div>
                    </div>
                    <span className="text-violet-600 font-semibold text-xl leading-loose">Digital Marketing</span>
                    <p className="text-gray-600 leading-normal pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsum harum libero kiclo kodls amet lorty vincj dolorp.</p>
                </div>

            </div>
        </div>
    );
}
