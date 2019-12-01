import React from 'react';
import { getCourses } from '../api/courseApi';

class CoursesPage extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        getCourses().then(courses => this.setState({ courses: courses }));
    }

    render() {
        return <h1>Courses</h1>;
    }

}

export default CoursesPage;