import React from 'react'
import ReactDOM from 'react-dom'



const welcome = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}

export default welcome
