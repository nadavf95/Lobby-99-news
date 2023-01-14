

export default function ArticleFightFor({article}) {
    if (article){
        return(
            <div className="article-fight-for">
                <h2> במה אנחנו נאבקים?</h2>
                <p>{article.fight_for}</p>
            </div>
        )
    }
}