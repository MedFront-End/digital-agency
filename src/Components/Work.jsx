import React from "react";

export default function Work() {
  return (
    <div className="mt-12 h-auto w-full bg-sky-100 p-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-32 flex flex-col lg:flex-row items-center justify-between gap-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-center lg:text-left w-full lg:w-1/2 lg:pt-3">
          Explore the <span className="text-violet-600">hidden</span> ideas and subscribe!
        </h1>
        <div className="flex  lg:w-1/2 bg-white rounded-md overflow-hidden shadow-md">
          <input
            className="flex-grow p-3 outline-none border-none bg-transparent"
            type="email"
            placeholder="Email"
          />
          <button className="w-auto bg-violet-600 text-white font-semibold p-3 ">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
