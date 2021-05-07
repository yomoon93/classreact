import React from 'react'

class Message extends React.Component {
    constructor(){
        super()
        this.state = {
            message : 'Welcome to this website!'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing!!'
        })
    }

    render() {
        return (
            <div>
                <h2>Hello{this.props.name}</h2>
                <h3>{this.state.message}</h3>
                <button onClick = {()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }


}

export default Message
