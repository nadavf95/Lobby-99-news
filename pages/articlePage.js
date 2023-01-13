// an article page template. Here we are show specific article data
import ArticleHeader from "../components/article_components/ariticleHeader";
import ArticleFightFor from "../components/article_components/articleFightFor";
import ActionStages from "../components/article_components/actionStages";
import RepresentationDetails from "../components/article_components/representationDetails";

export default function ArticlePage({article}) {
    
    if (article){
        return(
            // shows aricle
            <div className="article-page-container">

                <ArticleHeader article={article}/>
                {/* <ArticleFightFor article={article}/>
                <ActionStages article={article}/>
                <RepresentationDetails article={article}/>

                <div className="first-paragraph">
                    <p>article.first_paragraph</p>
                </div>

                <div className="image-graph">

                </div>

                <div className="second-paragraph">
                    <p>article.second_paragraph</p>
                </div> */}

            </div>
        )
    }
}