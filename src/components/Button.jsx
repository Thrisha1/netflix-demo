import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='text-lg border-2 border-red-500 w-24 h-12 text-red-500 rounded-md hover:bg-red-500 hover:text-white'>{props.title}</button>
    </div>
  )
}

export default Button