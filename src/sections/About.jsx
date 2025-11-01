import { useState } from "react";
import Globe from "react-globe.gl";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" adrian@jsmastery.pro");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="px-6 mx-auto my-20 max-w-7xl sm:px-16" id="about">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2 xl-grid-rows-6">
        {/* Grid 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="flex flex-col w-full h-full gap-5 p-4 border-2 sm:p-7 rounded-2xl border-slate-900">
            <img
              src="assets/images/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fil object-container"
            />
            <div>
              <p className="mb-2 text-lg font-semibold font-generalsans">
                Hi, I&apos;m Rafi
              </p>
              <p className="text-sm">
                Proactive IT professional skilled in web development,
                maintenance, performance optimization, and strong security
                implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="flex flex-col w-full h-full gap-5 p-4 border-2 sm:p-7 rounded-2xl border-slate-900">
            <div className="w-full">
              <Frameworks />
            </div>
            {/* <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            /> */}
            <div>
              <p className="mb-2 text-lg font-semibold">Tech Stack</p>
              <p className="text-sm">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="flex flex-col w-full h-full gap-5 p-4 border-2 sm:p-7 rounded-2xl border-slate-900">
            <div className="rounded-2xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 23.685,
                    lng: 90.3563,
                    text: "Hi, I'm here!",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="mb-2 text-lg font-semibold">
                I’m very flexible with time zone
              </p>
              <p className="text-sm">
                I&apos;m based in Dhaka, Bangladesh and open to remote work
                worldwide.
              </p>
            </div>
            <div className="flex justify-center ">
              <button className="inline-flex items-center gap-3 px-6 py-3 mt-4 text-white rounded-lg bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
                </span>
                <span>Contact Me</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="flex flex-col w-full h-full gap-5 p-4 border-2 sm:p-7 rounded-2xl border-slate-900">
            <img
              src="assets/images/grid4.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="mb-2 text-lg font-semibold">
                My Passion for Coding
              </p>
              <p className="text-sm">
                I love building things that work beautifully. From concept to
                deploy, I deliver reliable, scalable web apps.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="flex flex-col w-full h-full gap-5 p-4 border-2 sm:p-7 rounded-2xl border-slate-900">
            <img
              src="assets/images/grid5.png"
              alt="grid-4"
              className="w-full md:h-[146px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="text-sm text-center">Contact me</p>
              <div className="flex items-center justify-center gap-2" onClick={handleCopy}>
                <img
                  src={
                    hasCopied
                      ? "assets/images/tick.svg"
                      : "assets/images/copy.svg"
                  }
                  alt="copy"
                  className="cursor-pointer"
                />
                <p className="font-medium text-white lg:text-xl md:text-xl text-gray_gradient">
                  rafibinwores@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
