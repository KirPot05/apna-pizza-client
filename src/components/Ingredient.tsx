import React from 'react'

function Ingredient() {
    return (
        <div className='flex flex-col items-center shadow-xl p-6 bg-white rounded-md cursor-pointer transition-all hover:scale-105'>
            <img 
                className='object-contain h-32 w-32 rounded-full'
                src="https://m.media-amazon.com/images/I/71DYmqoq-VL._SL1024_.jpg" 
                alt="" 
            />

            <div className='flex flex-col items-center space-y-2 my-4'>
                <h3 className='text-2xl'> Tomato </h3>
                <p className='text-gray-400'> Lorem ipsum dolor sit amet. Lorem, ipsum. </p>
                <p className='text-xl font-bold'>$14</p>
            </div>
            <div className='flex justify-center -mb-10'>
                <button className='py-3 px-5 text-2xl bg-red-700 text-white rounded full transition-all active:scale-95'>+</button>
            </div>

        </div>
    )
}

export default Ingredient