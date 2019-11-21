import React from 'react'
import './rowComponent.css'
import ButtonComponent from '../button/buttonComponent'

export class RowComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className="row">
                <div class="flex">
                    <span className="row-description">Description</span>
                </div>
                <div class="flex">
                    <input type="row-checkbox" />
                    <ButtonComponent name="Delete"></ButtonComponent>
                </div>
            </div>
        )
    }
}
