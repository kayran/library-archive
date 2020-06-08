import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios'
import PageHeader from '../components/pageHeader';
import BookList from './bookList/bookList';

class Book extends Component {
    render() {
        const {list} = this.props;
        return (
            <main className='container'>
                <PageHeader name='Lista' small='livros'/>
                <section className='body'>
                    <BookList list={list}/>
                </section>
            </main>
        )
    }
}

const mapStateToProps = store => ({
    list: store.bookListState.list
 }); 

 export default connect(mapStateToProps)(Book);