export default function ActionStages({article}){
    let i = 0
    if (article){
        return(
            <div className="action-stages">
                <h2>שלבי הפעולה</h2>
                {article.action_stages.map(stage => {
                    i = i + 1;
                    if (stage == article.curr_stage){
                        return(
                            // current stage decoration
                            <>
                                <p>{stage}</p>
                            </>
                        )
                    }
                    else{
                        return(
                            // regular stage decoration
                            <>
                                <p>{stage}</p>
                            </>
                        )
                    }
                })}
            </div>
        )
    }
}