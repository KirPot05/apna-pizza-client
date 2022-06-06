import moment from 'moment';
import {useEffect, useState} from 'react'
import { fetchPreviousOrders } from '../services';

function Orders() {

	const [orders, setOrders] = useState([]);

	const getOrders = async () => {
		const {data} = await fetchPreviousOrders();

		if(data.success){
			setOrders(data.response);
			console.log(data.response);
		}
	}

	useEffect(() => {
		getOrders();
	}, []);

	const listIngredients = (pizza: Array<string> | never) => {
		return pizza.map((item, idx) => (
			<span key={idx}> {item}{idx < pizza.length-1 && ","}  </span>  // Shows comma for all ingredients except last
		))
	}

	return (
		<div>
			<h1 className='text-center text-5xl font-semibold mb-10'>Your Orders</h1>
			
			<div className='mt-5 w-[95%] mx-auto flex flex-wrap gap-12 items-center justify-center'>
				{orders.map(({id, payment_method, createdAt, ingredients_used, amount}, idx) => (
					<div key={id} className="bg-white w-96 rounded-md shadow-md"	>
						<h2 className='text-2xl text-center my-4'>Order {idx+1} </h2>
						<div className='flex justify-center'>
							<img 
								className='object-cover h-40 w-40 rounded-full'
								src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg" 
								alt="" 
							/>
						</div>

						<div className='my-3 mx-6'>
							<p className='text-lg text-gray-500'>Ingredients Used: <span className='text-black font-semibold'> {listIngredients(ingredients_used)} </span> </p>

							<p className='font-semibold mt-4'>Date: {moment.utc(createdAt).format("DD-MM-YYYY")} </p>
			
							<p className='mt-2'>Paid: <span className='font-bold'>₹{amount}</span></p>
							<p className='mt-2'> Payment Mode: <span className='font-bold'>{payment_method}</span> </p>
		

						</div>

					</div>
				))}

			</div>
		</div>
	)
}

export default Orders