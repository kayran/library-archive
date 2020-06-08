import {combineReducers} from 'redux'

import {bookReducer} from './bookReducers'

export const Reducers = combineReducers({
    bookListState: bookReducer
})