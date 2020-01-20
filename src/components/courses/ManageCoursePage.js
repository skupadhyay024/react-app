import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import CourseForm from '../courses/CourseForm';
import {newCourse} from './mockData'

import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_API_URL;

function ManageCoursePage ({ courses,
        authors,
        loadAuthors,
        loadCourses,
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

        return <CourseForm course = { course } errors={errors} authors={authors} />; 
    }



ManageCoursePage.propTypes = {
    course:PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
   loadCourses: PropTypes.func.isRequired,
   loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        course: newCourse,
        authors: state.authors,
        courses: state.courses
    }
}

const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors
}

export default connect (mapStateToProps, mapDispatchToProps) (ManageCoursePage);