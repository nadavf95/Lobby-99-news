import React, { useState } from 'react'
import Link from 'next/link'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export default function IconGrid ()  {


  const [colors, setColors] = useState(['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'])
  const[pressState,setPress]= useState([false,false,false,false,false,false,false,false])

  const handleClick = (index) => {

    const updatedColors = [...colors]
    const updatedState = [...pressState]

    updatedState[index] = updatedState[index]  === false ? true : false
    updatedColors[index] = updatedColors[index] === 'red' ? 'blue' : 'red'


    setColors(updatedColors)
    setPress(updatedState)
  }

  return (

    
    <div className="icon_grid">

      

      {colors.map((color, index) => (
        <Link key={index} href="#" legacyBehavior>
          <a className="icon" style={{ backgroundColor: color }} onClick={() => handleClick(index)}>
            Icon {index + 1}
          </a>
        </Link>
      ))}

    





      <style jsx>{`
        .icon-grid {
          display: inherit;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 20px;
          margin: 10px;
        }
        .icon {
          display: inline-block;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 16px;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}


