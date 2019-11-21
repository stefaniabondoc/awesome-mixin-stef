import React from 'react'
import './deleteComponent.css'

function DeleteComponent(props) {
    return (
        <button className="toggleButton" onClick={props.methodToRun}>{props.name}</button>
    )
}

export default DeleteComponent