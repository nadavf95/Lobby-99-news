import React, { useState } from "react";


export default function LikeButton() {
    // This button represent a like button for article"


    // !!!!!!!!!!!!!!!!!!!!!!!!           TO DO          !!!!!!!!!!!!!!!!!!!!!!!!!!
     
    // function that get the nums of article likes and creat a button that
    // add one to counter if user didn't liked all ready. 
    
    const [liked, setLiked] = useState(nums_of_likes);
    func = () => {

    }

    return (
        <button className="liked-button" onClick={() => setLiked(liked + 1)}> </button>
    );
  
}