import { FiArrowUpRight } from "react-icons/fi";
import { about } from "../../constants";

function About() {
  return (
    <section className="relative w-full mt-10 overflow-hidden md:mt-0" id="about">
      <div className="px-3 mx-auto container font-workSans pb-[100px] lg:pb-0 lg:pt-[125px] lg:h-[950px] bg-white relative overflow-hidden z-10">
        {about.map((about) => (
          <div key={about.id}>
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
              {/* About Image */}
              <div className="relative md:basis-2/4">
                <img
                  src={about.image}
                  alt={about.title}
                  className="w-full lg:w-auto"
                />

                <div className="w-[264px] h-[72px] bg-white shadow-2xl rounded-md p-3 absolute left-1/2 transform -translate-x-1/2 lg:left-32 lg:transform-none z-10 -bottom-8">
                  <div className="flex items-center justify-evenly">
                    {about.socials.map((social, index) => (
                      <a
                        href={social.link}
                        target="_blank"
                        key={index}
                        className={`p-4 rounded ${
                          index === 3
                            ? "bg-gradient-to-t from-primary-600 to-primary-300"
                            : ""
                        }`}
                      >
                        <img src={social.icon} alt={social.name} />
                      </a>
                    ))}




                  </div>
                </div>
              </div>

              {/* About content */}
              <div className="mt-8 space-y-8 md:basis-2/4 lg:mt-0">
                <h2 className="text-[32px] lg:text-[42px] font-bold text-[#132238] font-anton leading-[40px] lg:leading-[50px]">
                  {about.title}
                </h2>
                <p className="text-lg md:text-base lg:text-xl text-[#556070] text-justify">
                  {about.description}
                </p>

                <div className="flex flex-col gap-4 lg:flex-row">
                  <a
                    href=""
                    className="inline-flex items-center justify-center gap-3 px-6 py-3 text-lg font-medium text-center text-white transition-all duration-300 ease-in-out transform rounded-md lg:text-xl bg-gradient-to-r from-primary-600 to-primary-300 hover:scale-105 hover:bg-gradient-to-r hover:from-primary-300 hover:to-primary-600"
                  >
                    My Project
                    <FiArrowUpRight />
                  </a>

                  <a
                    href=""
                    className="p-0.5 h-[50px] w-full lg:w-[220px] hover:scale-105 transition-all duration-300 ease-in-out transform rounded-lg bg-gradient-to-r from-primary-600 to-primary-300"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-md">
                      <p className="flex items-center gap-3 text-lg font-medium text-transparent lg:text-xl bg-gradient-to-r from-primary-600 to-primary-300 bg-clip-text">
                        <img src={about.downloadIcon} alt="Download Icon" />{" "}
                        Download CV
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Bottom color effect */}
      <div className="bg-primary-200 w-[665px] h-[468px] blur-[250px] rounded-full absolute -bottom-[200px] -right-[300px] lg:z-10"></div>
    </section>
  );
}

export default About;