import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addToCart, fetchIngredients } from '../services';
import Ingredient from './Ingredient'

function IngredientsContainer() {

    const [ingredients, setIngredients] = useState([]);
    const [pizzaItems, setPizzaItems] = useState<Array<string>>([]);
    const navigate = useNavigate();

    const getIngredients = async () => {
        const {data} = await fetchIngredients();
        if(data.success){
            setIngredients(data.response);
        }
    }

    const addIngredientsToCart = async () => {

        if(localStorage.getItem('auth-token') === null){
            alert("Please Sign in")
            navigate('/login');
        }

        const {data} = await addToCart({
            pizza: pizzaItems
        });
        if(data.success){
            navigate("/cart");
        }
    }

    useEffect(() => {
        getIngredients();
    }, []);


    const addPizzaItem = (item: string) => {
        setPizzaItems(state => [...state, item])
    }

    const removePizzaItem = (item: string) => {
        setPizzaItems(state => state.filter((a) => a !== item));
    }

    return (
        <div className='m-5'>
            <h1 className='text-center text-5xl font-semibold'>Customize your pizza..!!!</h1>

            <div className='m-8 p-5 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 '>
                {ingredients.map(({id, name, description, img_url, price}) => {
                    return (
                    <Ingredient key={id}
                        name={name}
                        description={description}
                        imgUrl={img_url}
                        price={price} 
                        addPizzaItem={addPizzaItem}
                        removePizzaItem={removePizzaItem}
                    />)
                })}
            </div>

            <div className='m-1 text-center'>
                <button 
                    className='mr-12 bg-gradient-to-r from-amber-700 via-red-700 to-orange-400  transition-all text-white font-semibold py-4 px-32 rounded-md shadow-md active:scale-95'
                    onClick={addIngredientsToCart}
                > 
                    <span className='text-2xl'> Finalize Pizza  </span>
                </button>
            </div>
        </div>
    )
}

export default IngredientsContainer