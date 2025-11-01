import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "../components/canvas";

function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[70px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-500"></div>
          <div className="w-1 h-36 sm:h-80 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m <span className="text-violet-500">Rafi</span>
          </h1>
          <p className="mt-2 text-base md:font-medium md:text-2xl text-white-100">Passionate developer focused on building <br className="hidden sm:block" /> modern, scalable, and secure web applications.</p>
        </div>
      </div>

      <ComputersCanvas/>

      <div className="absolute flex items-center justify-center w-full bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex items-center justify-center p-2">
            <motion.div 
              animate ={{
                y:[0,20,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType : 'loop'
              }}

              className="mb-1 rounded-full size-3 bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
