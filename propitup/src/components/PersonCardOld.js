import React, { Component } from 'react';
    
class PersonCardOld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        return(
             <div>
                 <h1>{ this.props.firstName }, { this.props.lastName }</h1>
                 <h4>Age: { this.state.age }</h4>
                 <h4>Hair Color: { this.props.hairColor}</h4>
                 <button onClick={ ()=> this.setState({age: this.props.age + 1}) }>Birthday button for {this.props.firstName} {this.props.lastName} </button>
            </div>
        );    
    }
}
    
export default PersonCardOld;