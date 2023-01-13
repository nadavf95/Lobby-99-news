// an article page template. Here we are show specific article data
import ArticleHeader from "../components/article_components/ariticleHeader";
import ArticleFightFor from "../components/article_components/articleFightFor";
import ActionStages from "../components/article_components/actionStages";

export default function ArticlePage({article}) {
    
    if (article){
        return(
            // shows aricle
            <div className="article-page-container">

                <ArticleHeader article={article}/>
                <ArticleFightFor article={article}/>
                <ActionStages article={article}/>

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