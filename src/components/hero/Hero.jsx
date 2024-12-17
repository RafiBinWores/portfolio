import { FiArrowUpRight } from "react-icons/fi";
import { heroData } from "../../constants";
import React from "react";

function Hero() {
  return (
    <div className="lg:h-[1024px] bg-primary-700">
      <div className="px-7 mx-auto container font-workSans pt-[150px] lg:pt-[200px]">
        {heroData.map((data) => (
          <div className="flex flex-col items-end justify-between lg:flex-row" key={data.id}>
            {/* Hero Content */}
            <div className="lg:basis-3/5 lg:pe-[135px] pb-10 lg:pb-0">
              <div className="mt-5 space-y-4">
              <h1 className="text-5xl lg:text-[82px] text-white font-semibold">
                {data.name}
              </h1>
              <p className="lg:font-bold font-medium text-base text-primary-200 lg:text-[22px]">
                {data.designation}
              </p>
              <p className="text-white/70 text-base lg:text-[22px] text-justify mt-6 lg:leading-6 lg:pe-6">
                {data.shortIntro}
              </p>
              </div>

              {/* Hero Button */}
              <a
                href=""
                className="inline-flex items-center gap-3 px-5 py-3 mt-6 font-medium text-white transition-all duration-300 ease-in-out transform rounded-md lg:text-xl bg-gradient-to-r from-primary-600 to-primary-300 hover:scale-105 hover:bg-gradient-to-r hover:from-primary-300 hover:to-primary-600"
              >
                Let&apos;s Talk
                <FiArrowUpRight />
              </a>

              <div className="h-[110px] p-0.5 mt-[42px] rounded-lg bg-gradient-to-r from-primary-300 via-primary-300/0 via-55% to-primary-300">
                <div className="relative w-full h-full overflow-hidden rounded-md bg-primary-700">
                  <div className="flex items-center h-full bg-white/10 justify-evenly">
                    {data.state.map((state, index) => (
                      <React.Fragment key={state.id}>
                        {/* Content */}
                        <div className="text-center text-white">
                          <p className="font-semibold lg:text-[32px]">
                            {state.count}
                          </p>
                          <p className="text-xs lg:text-base">{state.title}</p>
                        </div>

                        {/* Vertical Line */}
                        {index !== data.state.length - 1 && (
                          <div className="h-[33px] w-[1px] bg-white/20"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Green BG color Effect */}
                  <div className="bg-primary-200 size-[100px] blur-3xl rounded-full absolute -bottom-8 right-8"></div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="pb-10 lg:basis-2/5 lg:pb-0">
              <div className="bg-gradient-to-t from-primary-300 p-0.5 rounded-lg">
                <div className="rounded-md bg-primary-700">
                  <img
                    className="bg-gradient-to-t from-white/10 rounded-b-md lg:h-[636px] object-cover lg:w-[536px]"
                    src={data.image}
                    alt="Hero Image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
