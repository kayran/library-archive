import { ADD_BOOK, BOOK_LIST_PENDING, BOOK_LIST_SUCCESS, BOOK_LIST_ERROR } from './actionTypes'

export const addBook = value => {
    return ({
        type: ADD_BOOK,
        value
    })
}

export const fetchBooksPending = () => {
    return ({
        type:BOOK_LIST_PENDING
    });
}
export const fetchBooksSuccess = (value) => {
    return ({
        type:BOOK_LIST_SUCCESS,
        value,
    })
}
export const fetchBooksError = (value) => {
    return ({
        type:BOOK_LIST_ERROR,
        value,
    })
}