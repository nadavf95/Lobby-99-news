

export default function RepresentationDetails({article}) {
    return(
        <div className="representation-details">
            <h4>מול מי המבק בכנסת</h4>
            <p>{article.opposite}</p>
            <h4>מי מייצג אותם</h4>
            <p>{article.opposite_represent_by}</p>
            <h4>מי מייצג אותנו</h4>
            <p>{article.lobby_represent_by}</p>
        </div>
    )
}