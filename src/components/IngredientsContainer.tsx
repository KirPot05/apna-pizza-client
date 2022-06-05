import React from 'react'
import Ingredient from './Ingredient'

function IngredientsContainer() {
    return (
        <div>
            <div className='m-1 text-center'>
                <button className='mr-12 bg-gradient-to-r from-amber-700 via-red-700 to-orange-400  transition-all text-white font-semibold py-4 px-32 rounded-md shadow-md active:scale-95'> 
                    <span className='text-2xl'> Finalize Pizza  </span>
                </button>
            </div>

            <div className='m-10 p-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-10 '>
                {Array.from({length: 6}).map((_, idx) => {
                    return <Ingredient key={idx} />
                })}

            </div>
        </div>
    )
}

export default IngredientsContainer