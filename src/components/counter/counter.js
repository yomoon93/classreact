import React, {Component} from 'react'
 // the counter needs a three things to work a constructor, a super, a render and a return 
 // we create a prop on line 6 and we also create an object called this.state that has a object of count
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
 
 //We create a function to increment the count 
 // callback function, the set state has two arguments one the count and the second here is the console
 
    increment() {
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log('callback value ' + this.state.count)
        })
    }
// we render the components and the div is the increments and the second is the button action with the increment function
    render(){
        return(
            <div>
                <div>{this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>

            </div>


        )
    }

}



export default Counter
