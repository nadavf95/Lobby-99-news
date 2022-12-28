// Our home page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready


export default function HomePage({data}) {
    if (data){
        return(
            //mapping articles headers item into list of  buttons itemes.
            <div className="articles_list">
                {data.map(article => {
                    return(
                        <div key={article.id} className="article_head_item">
                            <div className="article_head_content">
                                <div className="article_head_subject"> 
                                    <h4>{article.subject}</h4> 
                                </div>
                                <div className="article_head_text">
                                    <h2>{article.head_text}</h2>
                                </div>
                                <div className="article_publish_date"> {article.publish_date} </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        ) 
    }
}