import React, { Component } from 'react';

class Message extends Component {
    state = {
        message:"Visitor",
        count:0
      }
    render() { 
        console.log("state",this.state)
        return (  
            <div>
                <h1>Welcome {this.state.message}</h1>
                <button onClick={()=>this.changeMessage()} >Click me  </button>
                <h1>Count:{this.state.count}</h1>
                <button className="btn btn-primary" onClick={ ()=>this.increment()}>+</button>
            </div>
        );
    }
    changeMessage(){
        this.setState({
            message:"Thanks for subscribing"
        })
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
}
 
export default Message;