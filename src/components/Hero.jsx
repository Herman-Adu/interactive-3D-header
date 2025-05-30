//import "boxicons";
import "boxicons/css/boxicons.min.css";

import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div
        className="max-w-xl ml-[5%] mr-[5%] z-10 mt-[90%] md:mt-[75%] lg:mt-0"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* Tag box-with gradient border */}
        <div className="relative w-full md:w-48 h-12 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-xl items-center">
          <div className="absolute inset-[3px] bg-black rounded-xl flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i>
            INTRODUCING
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4 mt-12 pb-12">
          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 flex flex-col items-center lg:items-start justify-center max-w-[25rem] lg:max-w-[30rem]">
            EMAILS FOR <br className="hidden" />
            DEVELOPERS
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
            the best way to reach humans instead od spam folders, deliver
            transactional and marketing emails at scale.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="w-full flex flex-row items-center justify-center gap-4 mt-12 pb-12">
          <a
            href="#"
            className="flex flex-row gap-1 items-center border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-xl sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            <span>Documentation</span>
            <i className="bx bx-link-external"></i>
          </a>

          <a
            href="#"
            className="flex flex-row gap-1 items-center border border-[#2a2a2a] py-2 sm:py-3 px-6 sm:px-10 rounded-xl sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
          >
            <span>GetStarted</span>
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      {/* 3d Robot */}

      <div className="w-full flex flex-row items-center xl:overflow-x-hidden xl:pr-4">
        <Spline
          className="absolute lg:top-0 top-[-22%] bottom-0  h-full"
          scene="https://prod.spline.design/XkZeIXSXEawESsLW/scene.splinecode"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="3000"
        />
      </div>
      {/* <Spline
        className="absolute lg:top-0 top-[-22%] bottom-0 left-[2%] lg:left-[25%] sm:left-[-6%] h-full"
        scene="https://prod.spline.design/XkZeIXSXEawESsLW/scene.splinecode"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
      /> */}
    </main>
  );
};

export default Hero;
