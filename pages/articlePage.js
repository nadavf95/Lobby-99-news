// an article page template. Here we are show specific article data
import ArticleHeader from "../components/article_components/ariticleHeader"

export default function ArticlePage({article}) {
    
    if (article){
        return(
            // shows aricle
            <div className="article-page-container">
                <ArticleHeader article={article}/>

                <div className="article-fight-for">

                </div>

        
                <div className="action-stages-component"> 

                </div>

                <div className="representation-details">

                </div>

                <div className="first-paragraph">

                </div>

                <div className="image-graph">

                </div>

                <div className="second-paragraph">

                </div>

                div 


            </div>
        )
    }
}