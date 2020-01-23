import { LOAD_COURSES_SUCCESS , CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS } from '../actions/actionTypes';

import initialState from './initialState';

// const initialState = {
//     items:[],
//     item:{}
// }

export default function(state = initialState.courses, action) {
    console.log(action.course);
    switch (action.type) {
        case CREATE_COURSE_SUCCESS:
            return [...state, {...action.course}];
        case UPDATE_COURSE_SUCCESS:
                return state.map(course =>
                    course.id === action.course.id ? action.course : course
                    );
        
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
