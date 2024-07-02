import React from "react";

export default function Footer() {
  return (
    <div className="w-full pt-8 px-6 md:px-16 md:pb-16 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-24 text-center lg:text-left relative">
      <div className="mb-8">
        <h1 className="text-violet-600 text-3xl font-semibold">Digency</h1>
        <span className="text-xs">Grow with us</span>
        <p className="text-sm pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure voluptatibus nisi nam sit molestias
          earum est delectus doloribus dolorem.
        </p>
      </div>

      <div className="leading-loose mb-8">
        <h1 className="text-violet-600 text-xl font-semibold pb-3">Solution</h1>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">Marketing</a><br/>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">Analytics</a><br/>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">Commerce</a>
      </div>

      <div className="leading-loose mb-8">
        <h1 className="text-violet-600 text-xl font-semibold pb-3">Support</h1>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">Pricing</a><br/>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">Documentation</a><br/>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">Guides</a>
      </div>

      <div className="leading-loose mb-8">
        <h1 className="text-violet-600 text-xl font-semibold pb-3">Company</h1>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">About</a><br/>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">Jobs</a><br/>
        <a className="transition ease hover:text-violet-600 hover:underline" href="####">Blog</a>
      </div>

      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm ">
        &copy; 2024, All rights reserved.
      </span>
    </div>
  );
}
