import React from 'react'

import './input.css'

export default props => (
    <section className='form-item'>
        <label htmlFor={props.id}>{props.label}</label>
        <input 
            id={props.id} 
            className={`form-control ${props.className}`} 
            placeholder={props.placeholder} 
            value={props.value}
            onChange={props.onChange}
        />
    </section>
)
