import React from "react";
import img from "../img/m1.png";
import CountUp from 'react-countup';

export default function Home() {
    return (
        <div>
            <div className="relative container mx-auto flex flex-col lg:w-full lg:flex-row items-center justify-between px-8 py-16">
                <div className="lg:ml-2 lg:flex">
                    <div className="content lg:w-9/12 text-center lg:text-left">
                        <h1 className="font-semibold text-4xl lg:text-5xl tracking-wider lg:leading-tight">
                            We're Creating Perfect Digital Products To
                        </h1>
                        <h1 className="font-semibold text-4xl lg:text-5xl tracking-wider text-violet-600 lg:leading-tight">
                            Promote Your Brand
                        </h1>
                        <p className="py-8 lg:leading-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quo esse nihil, lor niuty jdse clup amet yup.
                        </p>

                        <div className="btn flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
                            <a
                                className="inline-block tracking-wider bg-violet-600 px-6 py-3 text-white border-2 border-violet-600 transition ease delay-150 hover:bg-white hover:text-black hover:border-slate-950 font-semibold"
                                href="#"
                            >
                                Get Started Now
                            </a>
                            <a
                                className="inline-block tracking-wider px-6 py-3 border-2 border-slate-950 font-semibold transition ease delay-150 hover:bg-violet-600 hover:text-white hover:border-violet-600"
                                href="#"
                            >
                                Discover More
                            </a>
                        </div>
                    </div>

                    <div className="image lg:ml-32 lg:w-6/12 mt-8 lg:mt-0">
                        <img className="w-full" src={img} alt="img" />
                    </div>
                </div>
            </div>

            <div className="info h-auto lg:h-32 py-6 lg:pb-6 bg-violet-600 lg:absolute lg:bottom-0 lg:w-full flex items-center justify-center">
                <div className="boxs flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-72 px-8 lg:px-44">
                    <div className="box text-white text-xl lg:text-2xl">
                        <CountUp start={0} end={5000} duration={8} className="tracking-wider font-bold" />
                        <p className="tracking-wider">Clients</p>
                    </div>

                    <div className="box text-white text-xl lg:text-2xl">
                        <CountUp start={0} end={350} duration={8} className="tracking-wider font-bold" />
                        <p className="tracking-wider">Running <br /> Projects</p>
                    </div>

                    <div className="box text-white text-xl lg:text-2xl">
                        <CountUp start={0} end={900} duration={8} className="tracking-wider font-bold" />
                        <p className="tracking-wider">Projects <br /> Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
