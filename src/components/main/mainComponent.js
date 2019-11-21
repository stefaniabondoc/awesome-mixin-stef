import React, { Component } from 'react'
import ButtonComponent from '../button/buttonComponent'
import DeleteComponent from '../button/deleteComponent'
import { HeaderComponent } from '../header/headerComponent'
import InputComponent from '../input/inputComponent'

export class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deleteRow: false,
            rows : []
        }

    }

    addRow = row => {
        this.setState({
            rows: [row, ...this.state.rows]
        });
    };

    toggleHeader = () => {
        this.setState({ showHeader: !this.state.showHeader });
    }

    render () {
        return (
            <div>
            <InputComponent onSubmit={this.addRow}></InputComponent>
            <DeleteComponent name="delete"></DeleteComponent>
            <ButtonComponent methodToRun={this.toggleHeader} name="show/hide"></ButtonComponent>
            { this.state.showHeader ? <HeaderComponent title="Header"></HeaderComponent> : '' }
            </div>
        );
    }
}