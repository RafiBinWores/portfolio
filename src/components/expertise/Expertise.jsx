import { FiArrowUpRight } from "react-icons/fi";
import { services } from "../../constants";
import { useRef, useState } from "react";

function Expertise() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="pb-20 bg-primary-100" id="services">
      {/* Section Heading */}
      <div className="px-3 font-anton py-20 lg:pt-[140px] container flex flex-col gap-6 md:flex-row justify-between lg:items-center mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[72px] uppercase lg:leading-[80px] ">
          <span className="text-transparent bg-gradient-to-r from-primary-600 to-primary-300 bg-clip-text">
            Expertise Fields
          </span>
          <br />
          for Your Business Needs.
        </h2>
        <p className="text-sm lg:text-lg font-urbanist font-medium md:w-[290px]">
          Driving tangible results for its clients, whether it&apos;s higher
          sales conversions, or improved engagement.
        </p>
      </div>

      {/* Slider Card */}
      <div
        ref={sliderRef}
        className="flex items-center gap-5 overflow-hidden lg:mt-[127px] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {services.map((service, index) => (
          <div key={service.id} className="min-w-[558px] h-[600px] px-10 pt-12 bg-primary-400">
            <div>
              <img className="size-[72px] object-cover mb-[50px]" src={service.image} alt="{service.name}" />
              <h3 className="text-4xl font-anton text-primary-600">
                {index < 9 ? `0${index + 1}` : index + 1}. {service.name}
              </h3>
              <p className="font-medium font-montserrat text-customGray leading-[26px] text-justify pt-6">
                {service.description}
              </p>
            </div>
            <a href="" className="inline-flex items-center gap-4 px-5 py-3 border rounded mt-[102px] border-primary-600/20 font-bold font-urbanist text-primary-600">
              Learn more <FiArrowUpRight className="font-bold text-primary-600" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
