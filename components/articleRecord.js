// This component represent article record.
// This component is a button that passing the user to the desirable article page.   
//   

export default function ArticleRecord({article}){
    if (article){
        return(
            <div key={article.id} className="article_head_item">
                <div className="article_record_content">

                    <div className="article_subject_likes_views_container">
                        <div className="article_head_subject"> 
                            <h4>{article.subject}</h4> 
                        </div>
                        <h4 className="likes">
                            L {article.likes}
                        </h4>
                        <h4 className="views">
                            V {article.views}
                        </h4>
                    </div>

                    <div className="article_head_text">
                        <h1>{article.head_text}</h1>
                    </div>
                    <div className="article_publish_date"> {article.publish_date} </div>
                </div>
            </div>
        )
    }
}