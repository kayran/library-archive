import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import API from '../api/books'

import Header from '../components/header/header';
import BookList from './bookList/bookList';

import './book.css'

const {fetchBookList} = API

class Book extends Component {
    componentDidMount(){
        const {fetchBookListAction} = this.props;
        fetchBookListAction();
    }

    render() {
        const {list, pending, error} = this.props;
        if(pending){
            return (
                <main className='container'>
                    <Header name='Lista' small='livros'/>
                    <h2>Carregando...</h2>
                </main>
            );
        }

        if(error){
            return (
                <main className='container'>
                    <Header name='Lista' small='livros'/>
                    <h2>Erro ao carregar a lista</h2>
                </main>
                
            );
        }

        return (
            <main className='container'>
                <Header name='Lista' small='livros'/>
                <section className='body'>
                    <BookList list={list}/>
                </section>
            </main>
        )
    }
}
const mapStateToProps = store => ({
    ...(store.bookListState)
 }); 
 const mapDispatchToProps = dispatch =>
   bindActionCreators({ fetchBookListAction: fetchBookList }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Book);