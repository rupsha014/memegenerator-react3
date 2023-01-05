import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Meme() {
    return (
        <main>
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
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}

export default Meme