import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services';

function Login() {

	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	});


	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({
			...credentials, [e.target.name]: e.target.value
		})
	}


	const handleRegister = async (e: React.SyntheticEvent) => {
		e.preventDefault();

        if(credentials.password !== credentials.confirmPassword){
            alert("Passwords don't match");
            return;
        }
        const {name, email, password} = credentials;

        const {data} = await register({
            name, 
            email, 
            password
        });

        if(data.success){
            localStorage.setItem('auth-token', data.response);
			alert('Register Successful');
            navigate('/');
        }

	}

	return (
		<div className="w-4/5 mt-8 mb-5 mx-auto py-8 flex items-center justify-center space-x-2 bg-[url('https://cdn.pixabay.com/photo/2020/03/21/02/26/pizza-4952508_1280.jpg')] rounded-md bg-cover">

			<div className='basis-2/5 bg-white p-5 mr-52'>

				<h2 className='text-3xl font-bold px-4 mb-4'>Register</h2>

				<form className='flex flex-col space-y-1 px-5' onSubmit={handleRegister}>
					<div className='flex flex-col my-2'>
						<label htmlFor="firstName">Name</label>
						<input className='px-2 py-1 ' type="text" value={credentials.name} name="name" onChange={handleInput} />
					</div>


					<div className='flex flex-col my-2'>
						<label htmlFor="email">Email</label>
						<input className='px-2 py-1 ' type="email" name="email" value={credentials.email} onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<label htmlFor="password">Password</label>
						<input className='px-2 py-1 ' type="password" name="password" value={credentials.password} onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input className='p-2 ' type="password" name="confirmPassword" value={credentials.confirmPassword} onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<input className='mt-3 p-1 bg-black opacity-90 text-white font-bold cursor-pointer' type="submit" value="Submit" />
					</div>
				</form>
                <p className='text-center mt-5'> Already have an account? <Link to="/login" className='font-bold text-blue-500'> Login </Link> </p>
			</div>
		</div>
	)
}

export default Login