export default function ActionStages({article}){
    if (article){
        return(
            <div className="action-stages">
                {article.Action_stages.map(stage => {
                    if (stage === article.curr_stage){
                        return(
                            // current stage decoration
                            0
                        )
                    }
                    else{
                        return(
                            // regular stage decoration
                            0
                        )
                    }
                })}
            </div>
        )
    }
}