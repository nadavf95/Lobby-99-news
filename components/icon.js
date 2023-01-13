import React, { useState } from 'react'
import Link from 'next/link'


export default function Icon (icon_img , id)  {
        const [isPressed, setPressed] = useState(false)


        const handleClick = ()=>{
            const changePress = isPressed
            changePress = changePress ===  false ? true : false
            setPressed(changePress)
        }

        return(


            <div>
            <label for = "icon">{id}</label>
            <img src = "icons8-iron-man-64.png" alt = "nature"/>
            </div>
        )


}
