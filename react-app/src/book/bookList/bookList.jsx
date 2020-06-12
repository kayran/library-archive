import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import IconButton from '../../components/iconButton/iconButton';

import API from '../../api/books';

const {deleteBook, fetchBookList} = API

const BookList =  props => {
    const renderRows = (props) => {
        const list = props.list || [];
        return list.map(book => {
            const deleteBookItem = async () => {
                await props.deleteBook(book.id);
                props.fetchBookList();
            }
            return (<tr key={book.id}>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.publishingHouse}</td>
                <td>{book.area}</td>
                <td>
                    <IconButton dataId={book.id} className='light' icon='trash-o' click={deleteBookItem}></IconButton>
                </td>
            </tr>)        
        });
        
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
                {renderRows(props)}
            </tbody>
        </table>
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({deleteBook, fetchBookList}, dispatch);

export default connect(null, mapDispatchToProps) (BookList)