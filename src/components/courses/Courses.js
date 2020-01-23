import React from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";

import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CourseList from './CourseList';
const baseUrl = process.env.REACT_APP_API_URL;

class Courses extends React.Component {
    state = {
        courses: [],
        redirectToAddCourse:  false
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
               {this.state.redirectToAddCourse && <Redirect to ="/newCourse" />}
        <h1>Courses</h1>
        <button
        style={{marginBottom: 20}}
        className="btn btn-primary add-course"
        onClick={() => this.setState({ redirectToAddCourse: true})}
        >Add Course</button>
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
    console.log(state.courses);
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