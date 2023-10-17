import React from "react";
import Servicesimg1 from "../../img/img1.jpg";
import Servicesimg2 from "../../img/img2.jpg";
import Servicesimg3 from "../../img/img3.jpg";
import Servicesimg4 from "../../img/img4.jpg";
import Servicesimg5 from "../../img/img5.jpg";
import Servicesimg6 from "../../img/img7.jpg";
import Banner1 from "../../img/hero-bg-1.jpg";

export default function Home() {
  return (
    <>
      <main className="h-[70vh] sm:h-[90vh] sm:w-full bg-cover flex  items-center ">
        <img src={Banner1} alt="" className="w-full h-full absolute -z-10 bg-cover" />
        <div className=" m-4 flex justify-center align-middle flex-col w-full h-full  sm:w-2/4 sm:h-60 sm:m-12">
          <h2 className="text-sky-400 text-3xl capitalize  ">it solutions</h2>
          <h1 className="text-white text-4xl sm:text-6xl capitalize font-bold ">
            providing the best services & it
            <span className="text-sky-400 px-4">Solutions</span>
          </h1>
        </div>
      </main>
      <div className="h-fit w-full bg-slate-600">
        <div className="h-auto w-full">
          <h2 className="text-sky-400 capitalize text-center text-4xl">
            services
          </h2>
          <h1 className="text-white p-4 text-5xl font-normal capitalize text-center ">
            services we offer
          </h1>
        </div>

        <div className="grid grid-cols-1 grid-flow-row lg:grid-cols-3 lg:grid-rows-2 gap-4 ">
          <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
            <img
              src={Servicesimg1}
              alt="Card 1"
              className="w-full h-46 object-cover mb-2 rounded-lg"
            />
            <p className="text-lg font-semibold">Website Development</p>
            <p className="text-gray-600">
              We delivered scalable and robust web development service to our
              clients, creating their desired web application for them.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={Servicesimg5}
              alt="Card 2"
              className="w-full h-46 object-cover mb-2 rounded-lg"
            />
            <p className="text-lg font-semibold">Application Development</p>
            <p className="text-gray-600">
              We are expertise on all latest mobile technology which we are used
              to develop all of our android and iOS app development service. We
              create excellent trailer made solution that run smoothly on all
              type of device
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={Servicesimg2}
              alt="Card 3"
              className="w-full h-46 object-cover mb-2 rounded-lg"
            />
            <p className="text-lg font-semibold">Digital Markiting</p>
            <p className="text-gray-600">
              We are not focus on traditional marketing strategy. We build the
              BRAND with our own marketing strategy to grow our customer
              business and help them to generate revenue. We offer SEO and SEM
              and strategic marketing.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={Servicesimg4}
              alt="Card 4"
              className="w-full h-42 object-cover mb-2 rounded-lg"
            />
            <p className="text-lg font-semibold">360 Virtual Tour</p>
            <p className="text-gray-600">
              Our immersive virtual tours work just like a website, which your
              viewers will be used to. From navigation menus, to hotspots that
              draw attention, you can control the story. We put it together.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={Servicesimg3}
              alt="Card 5"
              className="w-full h-42 object-cover mb-2 rounded-lg"
            />
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-gray-600">
              Our creative designing team works brilliantly to develop a user
              centric approach in the website design’s looks and function. We
              are a leading web designing company in India providing interactive
              and mobile friendly website.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={Servicesimg6}
              alt="Card 6"
              className="w-full h-42 object-cover mb-2 rounded-lg"
            />
            <p className="text-lg font-semibold">E-Commerce Development</p>
            <p className="text-gray-600">
              Now days eCommerce website development is trends. Everyone
              thinking to develop own eCommerce but they don’t have proper idea
              or knowledge how to launch own portal. We are here to guide you
              how you can develop and launch your own platform
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
