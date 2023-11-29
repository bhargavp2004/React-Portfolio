// Navbar Component
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [opened, setOpened] = useState(false);

  const navLinks = [
    { id: 1, link: 'Home', path: 'home' },      
    { id: 2, link: 'Skills', path: 'skills' }, 
    { id: 3, link: 'Projects', path: 'projects' },
  ];

  return (
    <>
      <div className='flex bg-gray-900 w-full h-14 items-center justify-between fixed border-blue-950 rounded border-b-4 border-opacity-60 z-10'>
        <div className='mx-4 font-signature text-4xl text-gray-200 font-bold'>
          <h1>Bhargav</h1>
        </div>

        <ul className='hidden md:flex'>
          {navLinks.map(({ id, link, path }) => (
            <li key={id} className='mx-4 text-gray-200 cursor-pointer hover:border-b-4 duration-200 border-blue-500'>
              <Link to={path} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>

        <div className='md:hidden text-gray-200 w-8 cursor-pointer' onClick={() => setOpened(!opened)}>
          {opened ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {opened && (
        <ul className='flex flex-col fixed md:hidden text-gray-200 w-full mt-14 left-0 h-screen justify-center items-center bg-gradient-to-tr from-pink-950 to-gray-900 to-90% z-50'>
          {navLinks.map(({ id, link, path }) => (
            <li key={id} className='mx-4 text-4xl py-4 cursor-pointer'>
              <Link to={path} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Navbar;
