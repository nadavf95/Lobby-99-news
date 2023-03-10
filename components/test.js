import React, { useState } from 'react'
import Link from 'next/link'

export default function Test(){

    const [colors, setColors] = useState(['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'])
    console.log("colors")
    console.log(colors)
    return(
       
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
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 10px;
          margin: 10px;
        }
        .icon {
          display: flex;
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