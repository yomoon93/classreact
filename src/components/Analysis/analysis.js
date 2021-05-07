import React from 'react'

function Analysis(props){
    return(

    <div>
        <h3>Sentiment Analysis</h3>
        <h2>{props.analysis1}</h2>
        <h2>{props.analysis2}</h2>
        <h2>{props.analysis3}</h2>
    </div>
        )
}
export default Analysis