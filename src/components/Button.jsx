import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <button type='button' style={{borderRadius, color, backgroundColor: bgColor}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button
