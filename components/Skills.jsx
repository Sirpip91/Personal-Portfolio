import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';
import CPP from '../public/assets/skills/cpp.png'
import Java from '../public/assets/skills/java.png'
import Git from '../public/assets/skills/git.png'
import Sql from '../public/assets/skills/sql.png'
import Linux from '../public/assets/skills/linux.png'
import Python from '../public/assets/skills/python.png'
import Typscript from '../public/assets/skills/typescript.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#0e6fff]'>
          Skills
        </p>
        <h2 className='py-4'>Tech Stack:</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>


        <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-orange-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>


          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>


          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-yellow-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>


          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-cyan-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

        <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-400'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={CPP} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C++</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-orange-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Java} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-zinc-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-zinc-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Typscript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>

         

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-black'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Linux} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Terminal</h3>
              </div>
            </div>
          </div>
          

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Sql} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SQL</h3>
              </div>
            </div>
          </div>


          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-cyan-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
         
         


          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-zinc-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Git} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>


          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-zinc-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AWS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>

          
        
         


        </div>
      </div>
    </div>
  );
};

export default Skills;
