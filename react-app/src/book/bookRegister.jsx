import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {addBook} from '../actions'
import API from '../api/books'

import Header from '../components/header/header'
import BookForm from './bookForm/bookForm'

const {sendBook} = API

class BookRegister extends Component {
    state = {
        name: '', 
        author: '', 
        publishingHouse: '',
        area: '',            
    }
    inputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    saveBook = async event => {
        await this.props.sendBook(this.state)
        // this.props.addBook(this.state);
        window.location.href = '#/livros'
    }
    render(){
        return (
        
        <main className='container'>
            <Header name='Cadastro' small='livros'/>
            <section className='body'>
                <BookForm 
                    saveBook={this.saveBook} 
                    changeValue={this.inputChange} 
                    state={this.state}
                />
            </section>
        </main>
    )}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addBook, sendBook }, dispatch);

export default connect(null, mapDispatchToProps) (BookRegister)