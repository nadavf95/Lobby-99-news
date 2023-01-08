// Our home page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready

import ArticleRecord from "../components/articleRecord"


export default function HomePage({data}) {
    if (data){
        return(
            //mapping articles headers item into list of  buttons itemes.
            <div className="articles_list">
                {data.map(article => {
                    return(
                        <>
                            <ArticleRecord article={article}/>
                        </>
                    )
                })}
            </div>
        ) 
    }
}