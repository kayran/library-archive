import React from 'react'
import IconButton from '../../components/iconButton/iconButton'
import Input from '../../components/input/input'

import './bookForm.css'

export default props => {
    return (
        <section role='form' className='book-form'>

            <Input id='name' 
                value={props.state.name} 
                onChange={props.changeValue}
                placeholder='Título do livro' 
                label='Título'
            />
            <Input id='author' 
                value={props.state.author} 
                onChange={props.changeValue}
                placeholder='Autor' 
                label='Autor'
            />
            <Input id='publishingHouse' 
                value={props.publishingHouse} 
                onChange={props.changeValue}
                placeholder='Editora' 
                label='Editora'
            />
            <Input id='area' 
                value={props.area} 
                onChange={props.changeValue} 
                placeholder='Área' 
                label='Área'
            />
            <section className='action-item'>
                <IconButton className='primary' icon='plus' text='Salvar' click={props.saveBook} state={props.state}></IconButton>
            </section>
        </section>
    )
}