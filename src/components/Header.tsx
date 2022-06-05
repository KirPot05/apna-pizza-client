import React from 'react'

function Header() {
    const btnClass = "text-white font-semibold bg-gradient-to-r from-amber-700 via-red-700 to-orange-400 py-3 px-6 rounded-md shadow-md transition-all active:scale-95";
    
    
    return (
        <div className='sticky top-0 z-10 py-1 px-10 flex items-center justify-between bg-white'>
            <div className='flex space-x-2 items-center'>
                <img 
                    className='object-contain h-20 cursor-pointer'
                    src="https://res.cloudinary.com/dmgvpfnfa/image/upload/v1654424418/pngwing.com_btdb0g.png" 
                    alt="" 
                />
                <h3 className='cursor-pointer text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-amber-800 via-red-700 to-orange-500'>Apna Pizza</h3>
            </div>
            {/* Right container */}
            <div className='flex space-x-5'>
                <button className={btnClass}>LOGIN</button>
                <button className={btnClass}>GO TO CART</button>

            </div>
        </div>
    )
}

export default Header