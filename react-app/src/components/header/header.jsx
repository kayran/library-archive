import React from 'react'

import './header.css'

export default props => (
    <header className='page-header'>
        <h2>{props.name} <small>{props.small}</small></h2>
        <hr/>
    </header>
)