import React, { Component } from 'react'
import './headerComponent.css'

export class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <header className="headerDiv">
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}