import { LOAD_COURSES_SUCCESS , CREATE_COURSE,CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS } from '../actions/actionTypes';
import * as courseApi from '../../api/courseApi';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

// export function createCourse(course) {
//     return { type : "CREATE_COURSE", course};
// }

export function createCourseSuccess(course) {
    console.log(course);
    return { type : CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return { type : UPDATE_COURSE_SUCCESS, course};
}





export const  loadCourses = () => dispatch => {
        axios.get(baseUrl+'/courses')
        .then(courses => dispatch({
            type: LOAD_COURSES_SUCCESS,
            payload: courses    
        }));
       
    }

    export function saveCourse(course){
        return function(dispatch, getState){
            return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                course.id
                ? dispatch(updateCourseSuccess(savedCourse))
                : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error =>{
                throw error;
            })
        }
    }
