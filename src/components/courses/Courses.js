import React from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CourseList from './CourseList';
const baseUrl = process.env.REACT_APP_API_URL;

class Courses extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        // axios.get(baseUrl+'/courses')
        // .then(res => {
        //     console.log(res);
        //     this.setState({courses:res.data});
        // })

        this.props.loadCourses();
        this.props.loadAuthors();
    }

    render() {
        return (
            <>
        <h1>Courses</h1>
        <div className="new-btn"><Link to ={'/newCourse'} className="nav-link">
            <button type="button" className="btn btn-primary">Create New Course</button></Link></div>
        <CourseList courses = {this.props.courses}/>
        </>
        );
    }

}

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
};

function mapStateToProps(state){
    return {
        courses: state.authors.length === 0 ? [] : state.courses.map(course =>{
            return{
                ...course,
                authorName:state.authors.find(a => a.id === course.authorId).name
            };
        }),
        authors: state.authors
    };
}

// function mapDispatchToProps(dispatch){
//     return {
//         actions: {
//             loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//             loadAuthors: bindActionCreators(courseActions.loadAuthors, dispatch)
//     }
// }

export default connect(mapStateToProps, {loadAuthors, loadCourses}) (Courses);