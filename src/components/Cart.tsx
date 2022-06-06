import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Orders from './Orders';
import UserCart from './UserCart';

function Cart() {

	const [categorySelected, setCategorySelected] = useState(false);
	const navigate = useNavigate();

	const toggleCategory = () => {
		setCategorySelected(state => !state);
	}



	useEffect(() => {

		const token = localStorage.getItem('auth-token');

		if(token === undefined || token === null){
			navigate('/login');
		} 

	}, [])

	return (
		<div className='m-5'>
			<div className='flex space-x-4 m-3'>
				<h3 className={`text-xl font-semibold cursor-pointer ${!categorySelected && "text-indigo-800"} `} onClick={toggleCategory}>Cart</h3>
				<h3 className={`text-xl font-semibold cursor-pointer ${categorySelected && "text-indigo-800"}`} onClick={toggleCategory}>Order History</h3>
			</div>

			{!categorySelected ? <UserCart/> : <Orders/>}
		</div>
	)
}

export default Cart;