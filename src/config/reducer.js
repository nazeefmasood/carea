 const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_DATA_TO_USER':
            return {...state, user : action.payload};
        default:
            return state
    }
}

export default reducer