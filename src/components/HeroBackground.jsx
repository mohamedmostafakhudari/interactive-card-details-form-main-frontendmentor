import React from "react";
import useWidth from "../hooks/useWidth";
export default function HeroBackground({ input }) {
  const width = useWidth();
  const backgroundImageStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const frontBackgroundStyle = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 100%",
    backgroundSize: "140% 100%",
  };
  const backBackgroundStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50%",
  };
  return (
    <div
      style={backgroundImageStyle}
      className={`${
        width < 1024 ? "bg-mobile-hero" : "bg-desktop-hero"
      } min-h-[30vh] h-[30vh] min-w-[30vw] lg:h-auto`}
    >
      <div className="container mx-auto px-5 h-full relative">
        <div
          style={backBackgroundStyle}
          className="bg-card-back p-5 rounded-lg text-white w-64 h-36 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-full lg:mt-24"
        >
          {/* cvc */}
          <p className="text-xs absolute top-1/2 -mt-2 right-7 tracking-wider">
            {input.cvc.input || "000"}
          </p>
        </div>
        <div
          style={frontBackgroundStyle}
          className="bg-card-front p-5 rounded-lg text-white w-64 h-36 absolute bottom-0 translate-y-1/4 md:left-1/2 md:-translate-x-full lg:top-1/2 lg:left-full lg:-translate-x-3/4 lg:-translate-y-full"
        >
          {/* logo */}
          <div className="w-12">
            <img src="./assets/images/card-logo.svg" alt="logo" />
          </div>
          {/* ccn */}
          <p className="mt-6 tracking-widest">
            {input.ccn.input || "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between py-4 text-xs">
            {/* name */}
            <div className="uppercase">
              {input.name.input || "jane appleseed"}
            </div>
            {/* exDate */}
            <div>
              {input.exDate.month.input || "00"}/
              {input.exDate.year.input || "00"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
