import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 pt-8'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          {/* <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Folarin</span>
          </h1> */}
          <TypeAnimation
            sequence={[              
              "Hi, I'm Folarin",
              1000,
              "Hi, I'm Folarin Emmanuel",
              1000,
              "Hi, I'm Folarin Emmanuel Adeniyi",
              1000,              
            ]}
            speed={50} 
            style={{ fontSize: '50px', fontWeight: 'bold' }}           
            repeat={Infinity}
            className='py-4 text-gray-700'
          />
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <motion.div 
          animate={{ scale: [1, 1.2, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2}}          
          className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/folarin-adeniyi-1670a2162/'
              target='_blank'
              rel='noreferrer'
            >
              <div               
              
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer '>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Folanuel'
              target='_blank'
              rel='noreferrer'
            >
              <div 
                            
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div 
                          
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            {/* <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
