import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Wargames from '../public/assets/projects/wargames.jpg';
import cryptoImg from '../public/assets/projects/schedulesystem.png'
import netflixImg from '../public/assets/projects/personal.png'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#0e6fff]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Wargames'
            backgroundImg={Wargames}
            projectUrl='/wargames'
            tech='Java/JavaFX'
          />
          <ProjectItem
            title='Schedule System'
            backgroundImg={cryptoImg}
            projectUrl='/schedulesystem'
            tech='mySQL/Java'
          />

          <ProjectItem
            title='Portfolio Website'
            backgroundImg={netflixImg}
            projectUrl='/personal'
            tech='React/Tailwind'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
