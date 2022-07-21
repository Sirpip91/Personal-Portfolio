import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

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
            I am a <b>Software Engineer</b> currently attending  <b>Lamar University</b>. I
            enjoy programming, developing, and debugging software.
             <br></br>
             <br />
             
          </p>
          <p className='py-2 text-gray-900 text-xl'>
           <b>Interests:</b><br></br>
           Machine Learning, Artificial Intelligence, and Web Development.
          </p>

          <br />
          <br />
          
         <p className='py-2 text-gray-900 text-xl'> Currently looking for positions to further increase
          my engineering experience.
         
         </p>
          <Link href='/#projects'>
            <p className='py-6 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
