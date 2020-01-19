import { LOAD_AUTHORS_SUCCESS } from './actionTypes';
import * as courseApi from '../../api/courseApi';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

// export function createCourse(course) {
//     return { type : "CREATE_COURSE", course};
// }



export const  loadAuthors = () => dispatch => {
        axios.get(baseUrl+'/authors')
        .then(authors => dispatch({
            type: LOAD_AUTHORS_SUCCESS,
            payload: authors    
        }));
       
    }
