import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services';

function Login() {

	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({
			...credentials, [e.currentTarget.name]: e.currentTarget.value
		})
	}


	const handleLogin = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		
		try{
			const {data} = await login({
				email: credentials.email,
				password: credentials.password
			});
	
			if(data.success){	
				localStorage.setItem('auth-token', data.response);
				navigate('/');
			}

		} catch(err){
			console.error(err)
		}
		

	}



	return (
		<div className="w-4/5 mt-5 mb-5 mx-auto py-5 flex items-center justify-center space-x-2 bg-[url('https://img.freepik.com/free-photo/tasty-pepperoni-pizza-black-concrete-background_79782-102.jpg?w=2000')] bg-cover rounded-md custom-blur" style={{height: "80vh"}}>

			<div className='basis-2/5 ml-80 bg-white py-10 px-4'>

				<h2 className='text-3xl font-bold px-4 mb-4 text-center' >Sign In</h2>

				<form className='flex flex-col space-y-1 px-5' onSubmit={handleLogin}>

					<div className='flex flex-col my-2'>
						<label htmlFor="email">Email</label>
						<input className='px-2 py-1 ' type="email" name="email" value={credentials.email} onChange={handleInput} />
					</div>


					<div className='flex flex-col my-2'>
						<label htmlFor="password">Password</label>
						<input className='px-2 py-1 ' type="password" name="password" value={credentials.password} onChange={handleInput} />
					</div>


					<div className='flex flex-col my-2'>
						<input className='mt-3 p-1 bg-black opacity-90 text-white font-bold cursor-pointer' type="submit" value="Login"/>
					</div>

					<div className='py-3'>
						<span>Don't have an account? <Link to="/register" className='text-blue-500 font-bold cursor-pointer'> Create One </Link> </span> 
					</div>

				</form>
			</div>
		</div>
	)
}

export default Login