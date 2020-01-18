import { LOAD_COURSES_SUCCESS , CREATE_COURSE } from '../actions/actionTypes';
import * as courseApi from '../../api/courseApi';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

// export function createCourse(course) {
//     return { type : "CREATE_COURSE", course};
// }



export const  loadCourses = () => dispatch => {
        axios.get(baseUrl+'/courses')
        .then(courses => dispatch({
            type: LOAD_COURSES_SUCCESS,
            payload: courses    
        }));
       
    }
