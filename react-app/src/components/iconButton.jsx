import React from 'react'

import './iconButton.css'

export default props => {
    if('hide' in props) {
        return null
    } else {
        return (
            <button className={`btn btn-${props.className}`} onClick={() => {console.log(props.state);props.click(props.state)}}>
                <i className={`fa fa-${props.icon}`}></i> {props.text}
            </button>
        )
    }
}