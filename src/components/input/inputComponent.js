import React, { Component } from 'react'
import './inputComponent.css';
import shortid from 'shortid';

export default class InputComponent extends Component {
    state = {
        description: ""
    };

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            description: this.state.description,
            complete: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="text" value={this.state.description} onChange={this.handleInput} placeholder="Make a wish.."/>
            </form>
        );
    }
}