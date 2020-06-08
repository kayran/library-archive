import { ADD_BOOK } from './actionTypes'

export const addBook = value => {
    console.log(value)
    return ({
        type: ADD_BOOK,
        value
    })
}