import React from 'react'
import { FaArchive } from "react-icons/fa";
import { BiArchive } from 'react-icons/bi';
import { RiArchiveFill } from "react-icons/ri";

export default function App() {
  return (
    <div className='grid grid-cols-3 gap-2'>
      <div className='bg-dark-primary h-screen w-2/4 shadow-lg shadow-dark-primary border-white border-1 '>
        <div className='justify-center items-center'>
            <h1 className='p-3 text-2xl text-white font-extrabold lg:mx-8'>Clairty</h1>
            <ul className='list-none mt-4'>
              <li className='text-white py-2 px-2 hover:cursor-pointer font-bold flex flex-row mx-4 rounded-lg hover:bg-dark-primary40 '>
                New Message
                <RiArchiveFill  size={30} color='white' className='mx-2' />
                </li>
              <li>Questions/Test</li>
              <li>Past Questions</li>
              <li>Revision</li>

            </ul>
        </div>
      </div>

      <div>
        <div className='bg-blue-300 w-screen h-30'>
          
        </div>
      </div>

      <div className='bg-slate-400 h-screen w-full shadow-md shadow-black'>
        <div className='justify-center items-center'>
            {/* <h1 className='p-3 text-2xl text-white font-extrabold lg:mx-14'>Clairty</h1> */}

        </div>
      </div>
      
    </div>
  )
}
