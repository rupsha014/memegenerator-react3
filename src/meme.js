import React from 'react';
import ReactDOM from 'react-dom/client';
import Image from './image';
import './index.css';
import memedata from './memedata';

function Meme() {
    let url
    function getMemeImage() {
        const memeArray = memedata.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
         url = memeArray[randomNumber].url                                                                                                                                 
        console.log(url)
    }   
    return (
        <div>
            <form className=" grid ">
                <div className='flex justify-between items-centre gap-8 mt-24 mr-11 ml-11 mb-8  '>
                    <input
                        type="text"
                        placeholder="shut-up"
                        className=" w-1/2 p-3  border-gray-300 border-2 rounded-lg font-semibold shadow-lg"
                    />
                    <input
                        type="text"
                        placeholder="and take my money away"
                        className=" w-1/2 p-3  border-gray-300 border-2 rounded-lg font-semibold shadow-lg"
                    />
                </div>

                <button
                    className="bg-gradient-to-r from-purple-900 to-purple-600 p-6 text-white font-semibold mr-11 ml-11 rounded-lg text-lg shadow-lg"
                    onClick={getMemeImage()}
                >
                    Get a new meme image 🖼
                </button>
                <div className='flex justify-center items-center mt-5'>
                <img  src={url}/>
                </div>
                 
            
            </form>
        </div>
    )
}

export default Meme