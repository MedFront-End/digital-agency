import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import m6 from "../img/m6.jpg";
import m7 from "../img/m7.jpg";
import m8 from "../img/m8.jpg";

export default function Test() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-6 md:px-12 lg:px-44 py-12">
      <h1 className="text-4xl font-semibold pb-12 text-center pt-14">Testimonials</h1>
      <p className="text-2xl font-semibold pb-2 text-center pb-10">
        Trusted by more than <span className="text-2xl font-semibold text-violet-600">5,000 customers</span>
      </p>

      <div className="boxs bg-violet-100 p-6 rounded-md">
        <Slider {...settings}>
          <div className="box p-8">
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum qui libero eaque,
              dicta nulla voluptas illo facilis dolorem asperiores! ipsum, dolor sit amet consectetur
              adipisicing elit. Mollitia debitis itaque consectetur provident dicta quas magni iusto
              ipsam, illo amet. ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur
              consequatur vel quod inventore laboriosam dolorum suscipit corporis repellat sed.
            </p>
            <div className="profile flex items-center gap-4 pt-8">
              <div>
                <img className="rounded-full w-10 h-10" src={m6} alt="Sarah" />
              </div>
              <span className="font-semibold text-lg">Sarah</span>
            </div>
          </div>

          <div className="box p-8">
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum qui libero eaque,
              dicta nulla voluptas illo facilis dolorem asperiores! ipsum, dolor sit amet consectetur
              adipisicing elit. Mollitia debitis itaque consectetur provident dicta quas magni iusto
              ipsam, illo amet. ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur
              consequatur vel quod inventore laboriosam dolorum suscipit corporis repellat sed.
            </p>
            <div className="profile flex items-center gap-4 pt-8">
              <div>
                <img className="rounded-full w-10 h-10" src={m7} alt="Vector" />
              </div>
              <span className="font-semibold text-lg">Vector</span>
            </div>
          </div>

          <div className="box p-8">
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum qui libero eaque,
              dicta nulla voluptas illo facilis dolorem asperiores! ipsum, dolor sit amet consectetur
              adipisicing elit. Mollitia debitis itaque consectetur provident dicta quas magni iusto
              ipsam, illo amet. ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur
              consequatur vel quod inventore laboriosam dolorum suscipit corporis repellat sed.
            </p>
            <div className="profile flex items-center gap-4 pt-8">
              <div>
                <img className="rounded-full w-10 h-10" src={m8} alt="John" />
              </div>
              <span className="font-semibold text-lg">John</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
