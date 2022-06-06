import { useState } from 'react'
import Orders from './Orders';
import UserCart from './UserCart';

function Cart() {

	const [categorySelected, setCategorySelected] = useState(false);

	const toggleCategory = () => {
		setCategorySelected(state => !state);
	}

	return (
		<div className='m-5'>
			<div className='flex space-x-4 m-3'>
				<h3 className={`text-xl font-semibold cursor-pointer ${!categorySelected && "text-indigo-800"} `} onClick={toggleCategory}>Cart</h3>
				<h3 className={`text-xl font-semibold cursor-pointer ${categorySelected && "text-indigo-800"}`} onClick={toggleCategory}>Previous Orders</h3>
			</div>

			{!categorySelected ? <UserCart/> : <Orders/>}

		</div>
	)
}

export default Cart;