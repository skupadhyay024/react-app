import { LOAD_COURSES_SUCCESS , CREATE_COURSE } from '../actions/actionTypes';

import initialState from './initialState';

// const initialState = {
//     items:[],
//     item:{}
// }

export default function(state = initialState.courses, action) {
    switch (action.type) {
        case CREATE_COURSE:
            return [...state, {...action.course}];
        
        case LOAD_COURSES_SUCCESS:
           return  action.payload.data;
                // return {
                //     ...state,
                //     items: action.payload.data
                // }
            
            default:
                console.log('load_def');
            return state;
    }
}
