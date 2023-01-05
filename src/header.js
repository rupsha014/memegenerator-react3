import React from 'react';
import ReactDOM from 'react-dom/client';


function Header() {
  return (
    <nav className='flex  justify-between items-center bg-gradient-to-r from-purple-900 to-purple-600 text-white   gap-11  p-5 shadow-lg'>
      <div className='flex gap-2 '>
        <img src="https://media.discordapp.net/attachments/1024058845686923365/1059860454660395028/image.png" className=' h-8 ' />

        <h2 className=' font-bold text-2xl '>Meme Generator</h2>
      </div>
      <div>
        <h4 className='mr-end'>React Course - Project 3</h4>
      </div>
    </nav>
  )
};

export default Header;