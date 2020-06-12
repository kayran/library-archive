import React from 'react'

import './iconButton.css'

export default props => {
    if('hide' in props) {
        return null
    } else {
        return (
            <button data-id={props.dataId} className={`btn btn-${props.className}`} onClick={() => {props.click(props.state)}}>
                <i className={`fa fa-${props.icon}`}></i> {props.text}
            </button>
        )
    }
}