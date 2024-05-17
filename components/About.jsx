import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/selfie.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#0e6fff]'>
            About
          </p>
          <h2 className='py-2'>Bradley Allen</h2>
          <p className='py-2 text-gray-600'>
            
          </p>
          <p className='py-4 text-gray-900 text-xl'>
          I&#39;m a <b>software engineer</b> that enjoys developing, debugging, and building applications that have an <b>impact</b>.
          <br></br><br />
          Constently improving my programming skills, documenting solutions, and partaking in the software development lifecycle is what keeps me working on my craft.

             <br />
             
          </p>
    
          <p className='py-4 text-gray-900 text-xl'>When I&#39;m not programming you will find me:</p>
          
          <ul className='py-2 text-gray-900 text-xl'>
            <li>&#x2022; Playing the harmonica 🎵 </li>
            <li>&#x2022; Fishing 🎣</li>
            <li>&#x2022; Kayaking 🛶 </li>
            <li>&#x2022; Web Surfing 💻 🌊</li>
          </ul>
          
          <Link href='/#projects'>
            <p className='py-6 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl object-cover' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
