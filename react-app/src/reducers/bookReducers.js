const initialState = {
    list: [],
    pending: false,
    error:null
};
const validActions = {
    ADD_BOOK(state, item) {
        const newState = {...state}
        newState.list.push(item);
        console.log(newState)
        return newState;
    },
    BOOK_LIST_PENDING(state, _){
        return ({
            ...state,
            pending:true
        });
    },
    BOOK_LIST_SUCCESS(state, books){
        return ({
            ...state,
            pending:false,
            list: books
        });
    },
    BOOK_LIST_ERROR(state, error){
        return ({
            ...state,
            pending:false,
            error
        });
    }


}
export const bookReducer = (state = initialState, action) => {
    if(action.type in validActions)
        return validActions[action.type](state, action.value);
    //console.warn(`Invalid Action Type ${action.type}. You need to Implements it!`)
    return state;
}