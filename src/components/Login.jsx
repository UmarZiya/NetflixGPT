import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignInForm,setisSignInForm]=useState(true)
  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm)
  }

  return (
    <div>
        <div className='absolute top-0 left-0 w-full z-20'>
          <Header />
        </div>
      <div className='relative'>      
        <img className='w-full h-screen object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" alt="background img" />
      </div>
        <div className=' absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-60'>
          <form className='bg-black opacity-85 p-8 rounded text-white flex flex-col gap-4 w-full max-w-md'>
            <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input 
              type="text" 
              placeholder='Enter your email'
              className='p-2 rounded bg-gray-800 text-white'
            />
            {!isSignInForm &&(<input className='p-2 rounded bg-gray-800 text-white'
            type="text"
            placeholder='FullName'
            />)}

            <input 
              type="password" 
              placeholder='Enter your password'
              className='p-2 rounded bg-gray-800 text-white'
            />
            {!isSignInForm && (<input 
              type="password" 
              placeholder='Confirm your password'
              className='p-2 rounded bg-gray-800 text-white'
            />)}

            <button className='bg-red-600 hover:bg-red-700 rounded p-2' > {isSignInForm ? "Sign In": "Sign Up" }</button>
            <p className='font-bold py-2 active-underline cursor-pointer hover:underline' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}</p>
          </form>
        </div>  
    </div>
  )
}

export default Login