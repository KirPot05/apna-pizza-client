import React from 'react'

function Cover() {
    return (
        <div className='bg-white m-10 p-4 flex flex-col md:flex-row justify-between rounded-md shadow-sm'>
            <img 
                className='object-contain h-80'
                src="https://thumbs.dreamstime.com/b/pizza-isolated-5656323.jpg" 
                alt="" 
            />

            <div className='mt-6 mx-6 flex flex-col space-y-2 p-4'>
                <h1 className='text-6xl text-slate-800'>Premium Offer</h1>
                <p className='text-xl'> <span> 🌶️🌶️🌶️🌶️ </span> Hot as Hell!! </p>
                <p className='text-lg text-gray-400'>Lorem ipsum dorspiciatis nihil officiis reiciendis ut, rerum saepe quaerat ea nisi facilis excepturi soluta.</p>
                
                <button className='w-48 px-5 py-4 rounded-md shadow-md text-xl cursor-default'> Price: <span className='text-pink-600 font-bold'> ₹255 </span> </button>

            </div>

        </div>
    )
}

export default Cover