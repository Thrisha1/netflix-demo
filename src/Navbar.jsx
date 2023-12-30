
import React from 'react'
import Button from './components/Button'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 bg-transparent'>
        {/* left side */}
        <div className="">
            {/* logo */}
            <img className='w-44 ' src="https://imgs.search.brave.com/wgBHIIfgssVBtfwYC227BBTnm530qhqvzVGm1YSiFgg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw" alt="" />
        </div>

        {/* right side */}
          
        <div className="flex gap-5 items-center">
            <select className='text-lg border-2 border-red-500 w-32 h-12 bg-red-500 text-white rounded-md'>
                <option value="english">English</option>
                <option value="malayalam">malayalam</option>
            </select>
            <Button title="SignUp" Link="/signup" />
            <Button title="SignIn" Link="/login" />
        </div>

        
    </div>
  )
}

export default Navbar