import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="object-contain w-16 h-16"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <motion.section 
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true , amount: 0.25}}
    className={`${styles.padding} max-w-7xl relative z-0 am-auto`}
    id="about"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", "0.1", 1)}
        className="text-[17px] text-secondary mt-4 max-w-3xl leading-[30px]"
      >
        I'm a skill developer with experience in PHP, JavaScript and experience
        in framework like React, Laravel, Tailwind CSS. I am always eager to
        learn new skills, gain valuable experiences, and approach tasks with
        creativity and innovation. My experience includes working effectively
        both independently and as part of a collaborative team.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default About;
