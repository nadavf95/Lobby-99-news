// Our home page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready

import ArticleRecord from "../components/articleRecord"
import React, { useState } from 'react';
import ArticlePage from "./articlePage";




export default function HomePage({data}) {
    const [state, setCount] = useState(-1);
    if (state == -1){
        return(
            //mapping articles headers item into list of  buttons itemes.
            <div className="articles_list">
                {data.map(article => {
                    return(
                        <>
                            <ArticleRecord article={article} use_func={setCount}/>
                        </>
                    )
                })}
            </div>
        ) 
    }
    else{
        return(
            <ArticlePage article={data[state]}/>
        )
    }
}