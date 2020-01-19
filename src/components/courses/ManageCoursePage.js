import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';

import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_API_URL;

function ManageCoursePage ({ courses , authors, loadAuthors, loadCourses}) {

    useEffect( () => {


if(courses.length  === 0){
    loadCourses();
}

if(authors.length  === 0){
    loadAuthors();
}
    }, [] );

        return (
            <>
        <h1>Manage Course</h1>
        </>
        );
    }



ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
   loadCourses: PropTypes.func.isRequired,
   loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        authors: state.authors,
        courses: state.courses
    }
}

const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors
}

export default connect (mapStateToProps, mapDispatchToProps) (ManageCoursePage);