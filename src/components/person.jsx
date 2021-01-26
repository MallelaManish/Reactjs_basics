import React, { Component } from 'react';

class Person extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <h1>Hello {this.props.name}</h1>
          </div> 
         );
    }
}
 
export default Person;