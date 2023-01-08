export default function ArticleRecord({article_meta_data}){
    if (article_meta_data){
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
    }
}