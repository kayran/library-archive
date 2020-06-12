import {fetchBooksPending, fetchBooksSuccess, fetchBooksError} from '../actions'

import axios from 'axios'

const fetchBookList = () => {
    return dispatch => {
        dispatch(fetchBooksPending());
        try{
            axios.get('http://localhost:3001/books')
            .then(res => {
                dispatch(fetchBooksSuccess(res.data));
            })
            .catch(error =>{
                dispatch(fetchBooksError(error));    
            });
           
        } catch (error){
            dispatch(fetchBooksError(error));
        }
    }
};

const sendBook = (book) => {
    return async dispatch => {
        console.warn(book)
        await axios.post('http://localhost:3001/books', {
            ...book
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        });
        return
    }
}

const deleteBook = (bookId) => {
    return async dispatch => {
        await axios.delete(`http://localhost:3001/books/${bookId}`)
        .then(res=>{
            console.log(res);
            console.log(res.data);
        });
        return
    }
}

const API = {
    fetchBookList,
    sendBook,
    deleteBook,
};

export default API;