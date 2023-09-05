import Image from 'next/image';
import React from 'react';
import Wargames from '../public/assets/projects/wargamesp.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const wargames = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Wargames}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Wargames</h2>
          <h3>Java / JavaFX / Object-Oriented </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='py-4'>
          This is a project to practice object oriented programming with java and put it to use.

                The project consists of a tic-tac-toe game. The player must defeat the ai in order to win.

              There are two difficulties beginner and unbeatable.
          </p>
          <a
            href='https://github.com/Sirpip91/Wargames'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://youtu.be/aL7mdJtIvzY'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Java
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaFX
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default wargames;
