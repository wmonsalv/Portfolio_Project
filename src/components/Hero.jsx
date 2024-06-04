import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';


const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src="./src/assets/backgrounds/jeremy.jpg"
          alt="world map"
          className="w-full h-full"
        />
      </div>
    
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center ml-3">
            {/* <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" /> */}
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-white font-poppins`}>
              Hi, there!
              I'm{' '}
              <span
                className="lg:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold">
                Adewale
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white`}>
             An enthusiastic <span className='bg-red-500'>web full-stack developer</span> <br className="sm:block hidden" />
              
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[20px] h-[64px] rounded-3xl border-4 
           
            justify-center items-start ">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 mt-10 right-[450px] border-spacing-10 rounded-full top-[200px] max-w-xs object-cover"
            src="./src/assets/personal/profile.jpg"
            alt="myprofile" 
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
