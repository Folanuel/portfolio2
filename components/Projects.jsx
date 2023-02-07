import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/cryptoapp.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
// import twitchImg from '../public/assets/projects/twitch.jpg'
import elearningImg from '../public/assets/projects/E-learning.png'
import blogImg from '../public/assets/projects/folablog.png'
import portfolioImg from '../public/assets/projects/oldportfolio.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          /> */}
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          
          {/* <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
          <ProjectItem
            title='E-learning App'
            backgroundImg={elearningImg}
            projectUrl='/elearning'
            tech='React JS'

          />
          <ProjectItem
            title='Blog App'
            backgroundImg={blogImg}
            projectUrl='/blog'
            tech='Next JS'

          />

          <ProjectItem
            title='Netflix App Coming soon'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />

          <ProjectItem
            title='Old Portfolio'
            backgroundImg={portfolioImg}
            projectUrl='/oldPortfolio'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
