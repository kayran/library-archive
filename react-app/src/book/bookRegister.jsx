import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
//import axios from 'axios'

import {addBook} from '../actions'

import PageHeader from '../components/pageHeader'
import BookForm from './bookForm/bookForm'
import { connect } from 'react-redux'

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
    saveBook = event => {
        console.log(this.state)
        addBook(this.state);
    }
    render(){
        return (
        
        <main className='container'>
            <PageHeader name='Cadastro' small='livros'/>
            <section className='body'>
                <BookForm 
                    saveBook={addBook} 
                    changeValue={this.inputChange} 
                    state={this.state}
                />
            </section>
        </main>
    )}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addBook }, dispatch);

export default connect(null, mapDispatchToProps) (BookRegister)