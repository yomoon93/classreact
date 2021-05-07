import React from 'react'

function Vistors(props){
    return(

    <div className="face">
        <header className="head" >
        <h3>Website Vistors</h3>
        <h2>{props.visitors}</h2>
        </header>
        <div id="con">Graph here</div>
    </div>
        )
}
export default Vistors