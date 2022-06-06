import { useState } from 'react'


interface IngredientTypes{
    name: string | undefined,
    description: string | undefined,
    imgUrl: string | undefined,
    price: number | undefined
}

function Ingredient({name, description, imgUrl, price}: IngredientTypes) {

    const [selected, setSelected] = useState(false);

    const addIngredient = () => {
        setSelected(state => !state);
    }


    return (
        <div className='w-72 h-80 flex flex-col items-center shadow-xl p-6 bg-white rounded-md cursor-pointer transition-all hover:scale-105'>
            <img 
                className='object-contain h-28 w-28 rounded-full'
                src={imgUrl} 
                alt="" 
            />

            <div className='flex flex-col items-center space-y-2 my-4'>
                <h3 className='text-2xl'> {name} </h3>
                <p className='text-gray-400'> {description?.slice(0,20) + "..."} </p>
                <p className='text-xl font-bold'>₹{price}</p>
            </div>
            <div className='flex justify-center'>
                <button className={`py-2 px-5 text-xl ${ selected ? "bg-green-600" : "bg-red-700"} text-white rounded full transition-all active:scale-95`} onClick={addIngredient} >
                    {selected ? "Remove" : "Add"}
                </button>
            </div>

        </div>
    )
}

export default Ingredient