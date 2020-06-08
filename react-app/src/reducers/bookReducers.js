const initialState = {
    list: [{
        name: 'asdf',
        publisherHouse: 'rewt',
        author: 'Kaer',
        area: 'lghjk'
    }]
}
const validActions = {
    ADD_BOOK(state, item) {
        const newState = {...state}
        newState.list.push(item);
        console.log(newState)
        return newState;
    }
}
export const bookReducer = (state = initialState, action) => {
    if(action.type in validActions)
        return validActions[action.type](state, action.value);
    console.warn(`Invalid Action Type ${action.type}. You need to Implements it!`)
    return state;
}