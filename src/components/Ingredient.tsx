import { useState } from 'react'


interface IngredientTypes{
    name: string | undefined,
    description: string | undefined,
    imgUrl: string | undefined,
    price: number | undefined,
    addPizzaItem: Function,
    removePizzaItem: Function
}

function Ingredient({name, description, imgUrl, price, addPizzaItem, removePizzaItem}: IngredientTypes) {

    const [selected, setSelected] = useState(false);

    const addIngredient = (item: string | undefined) => {
        setSelected(true);
        addPizzaItem(item);
    }

    const removeIngredient = (item: string | undefined) => {
        setSelected(false);
        removePizzaItem(item);
    }

    return (
        <div className='w-72 flex flex-col items-center shadow-xl p-6 bg-white rounded-md  transition-all hover:scale-105 overflow-hidden relative'>
            {selected && <div className='bg-green-600 w-20 h-20 rounded-full flex items-center justify-center text-white absolute -top-8 -left-8'></div>}

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
            <div className='flex justify-center space-x-4 mt-2'>
                <button 
                    className={`py-2 px-5 ${selected ? "bg-gray-500" : "bg-blue-600 transition-all active:scale-95 cursor-pointer "} text-white rounded full  `} 
                    onClick={() => addIngredient(name)} 
                    disabled={selected}
                >
                   Add
                </button>
                
                <button 
                    className={`py-2 px-5 ${!selected ? "bg-gray-500" : "bg-red-700 transition-all active:scale-95 cursor-pointer "} text-white rounded full  `} 
                    onClick={() => removeIngredient(name)} 
                    disabled={!selected}
                >
                    Remove
                </button>
                
            </div>

        </div>
    )
}

export default Ingredient