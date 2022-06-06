import { useEffect, useState } from 'react'
import { fetchCartItems, placeOrder } from '../services';
import NotFound from './NotFound';

function UserCart() {

	const [cartItems, setCartItems] = useState([]);
	const [payMode, setPayMode] = useState <Array<string>>([]);

	const getCartItems = async () => {
		const {data} = await fetchCartItems();
		if(data.success){
			setCartItems(data.response);
		}
	}

	const listIngredients = (pizza: Array<string> | never) => {
		return pizza.map((item, idx) => (
			<span key={idx}> {item}{idx < pizza.length-1 && ","}  </span>  // Shows comma for all ingredients except last
		))
	}

	const placePizzaOrder = async (id: number, address: string = "Mumbai") => {
		if(payMode[id] === ""){
			alert("Please enter the mode of payment");
		}

		const {data} = await placeOrder({
			cart_item_id: id,
			payment_method: payMode[id],
			address
		});

		if(data.success){
			alert("Order placed successfully");
		}

	}

	const addOrderPayMode = (id: number, value: string) => {
		setPayMode(state => [...state, state[id] = value]);
	} 

	useEffect(() => {
		getCartItems();
	}, [])

	return (
		<div className='m-5'>

			{cartItems.length > 0 ? (<div>
				<h1 className='text-4xl text-center'>Your Pizza</h1>
				<div className='w-[95%] my-5 mx-auto'>
					{cartItems.map(({id, pizza, price}, idx) =>(
						<div className='bg-white my-4 flex rounded-md p-1 relative' key={id}>
							<img
								className='object-contain h-40 rounded-md' 
								src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg" 
								alt="" />
							<div className='py-2 px-4'>
								<h1 className='text-3xl font-semibold'>Order {idx+1}</h1>
								<p className='text-xl text-gray-600 mt-6'>Ingredients added: 
									<span className='text-black font-semibold'> {listIngredients(pizza)} </span> 
								</p>
								<div className='flex items-center mt-5 space-x-3'>
									<p className='font-semibold'>Select payment Mode: </p>
									<select value={payMode[id]} 
										onChange={(e) => addOrderPayMode(id, e.currentTarget.value)} 
										className="py-1 px-2 cursor-pointer"
									>
										<option disabled></option>
										<option value="CREDIT CARD">CREDIT CARD</option>
										<option value="DEBIT CARD">DEBIT CARD</option>
										<option value="UPI">UPI</option>
									</select>
								</div>
								
								<p className='mt-6 text-gray-500'>* Order value comprises of Rs.100/- for pizza base</p>
							</div>
							<div className='absolute top-0 right-10 p-3 flex flex-col items-center'>
								<h3 className='text-lg font-semi-bold'>Order Price:</h3>
								<p className='text-3xl font-bold'>₹{price}*</p>
							</div>

							<div className='absolute bottom-4 right-10 p-2'>
								<button 
									className='text-white p-2 rounded-md bg-gradient-to-r from-amber-800 via-red-700 to-orange-600 font-semibold transition-all active:scale-95'
									onClick={() => placePizzaOrder(id)}
								>
									Place Order
								</button>
							</div>
						</div>
					))}

				</div>


				</div>) : <NotFound/>
			}
		</div>
	)
}

export default UserCart;