import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import CourseForm from '../courses/CourseForm';
import {newCourse} from './mockData'

import PropTypes from 'prop-types';

const baseUrl = process.env.REACT_APP_API_URL;

function ManageCoursePage ({ 
        courses,
        authors,
        loadAuthors,
        loadCourses,
        saveCourse,
        history,
         ...props}) {

    const [course, setCourse] = useState({...props.course});
    const [errors, setErrors] = useState({});

    useEffect( () => {


if(courses.length  === 0){
    loadCourses();
}

if(authors.length  === 0){
    loadAuthors();
}
    }, [] );

    function handleChange(event) {
        const { name, value } =  event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name] : name==="authorId" ? parseInt(value, 10) : value
        }));
    }

    function handleSave(event){
        event.preventDefault();
        saveCourse(course).then(()=>{
            history.push("/courses");
        });
    }

        return <CourseForm
         course = { course }
          errors={errors}
           authors={authors}
           onChange={ handleChange }
           onSave = { handleSave } 
           />; 
    }



ManageCoursePage.propTypes = {
    course:PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
   loadCourses: PropTypes.func.isRequired,
   loadAuthors: PropTypes.func.isRequired,
   saveCourse: PropTypes.func.isRequired,
   history: PropTypes.object.isRequired
};

export function getCourseBySlug(courses , slug) {
    return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps){
    const slug = ownProps.match.params.slug;
    const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
    return {
        course: course,
        authors: state.authors,
        courses: state.courses
    }
}

const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors,
  saveCourse: saveCourse
}

export default connect (mapStateToProps, mapDispatchToProps) (ManageCoursePage);