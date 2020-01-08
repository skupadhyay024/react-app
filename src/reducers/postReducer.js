const postReducer = (state =[] , action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return state.concat([action.data]);
            
    
        default:
            return state;
    }
}

export default postReducer;