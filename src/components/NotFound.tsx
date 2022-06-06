import React from 'react'

function NotFound() {
  return (
    <div className='h-[50vh] flex flex-col items-center justify-center'>
			<img 
				className='object-contain h-32 contrast-50'
				src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" 
				alt="" 
			/>
			<h3 className='text-3xl text-gray-500 mt-4'>Add some Pizzas to cart</h3>
	</div>
  )
}

export default NotFound