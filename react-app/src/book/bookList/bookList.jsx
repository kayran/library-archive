import React from 'react';
import IconButton from '../../components/iconButton';

export default props => {
 
    const renderRows = () => {
        const list = props.list || [];
        console.log(list)
        return list.map(book => (
            <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.publishingHouse}</td>
                <td>{book.area}</td>
                <td>
                    <IconButton className='success' icon='check'></IconButton>
                    <IconButton className='warning' icon='undo'></IconButton>
                    <IconButton className='danger' icon='trash-o'></IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Área</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}