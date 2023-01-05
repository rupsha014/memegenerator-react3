import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Image({url}) {
  return (
    <div className='flex justify-center items-center  p-20 rounded-lg'>
        <img src={url} className='h-[200px]'/>
    </div>
  )
}

export default Image;