export default function ArticleHeader({article}) {
    if (article){
        return(
            <div className="article-header">
                <h4>{article.subject}</h4>
                <h1>{article.head_text}</h1>
                <h4>{article.publish_date}</h4>
            </div>
        )
    }
}