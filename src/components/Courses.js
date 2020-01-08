import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_API_URL;

class Courses extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        axios.get(baseUrl+'/courses')
        .then(res => {
            console.log(res);
            this.setState({courses:res.data});
        })
    }

    render() {
        return (
            <>
        <h1>Courses</h1>
        <div className="new-btn"><Link to ={'/newCourse'} className="nav-link">
            <button type="button" class="btn btn-primary">Create New Course</button></Link></div>
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Author Id</th>
                <th>Category</th>
            </tr>
            </thead>
        <tbody>
      {  this.state.courses.map(course => {
            return (
            <tr key={course.id}>
            <td>{ course.title }</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            </tr>
            );
    }
        )
}
         

</tbody>
        </table>
        </>
        );
    }

}

export default Courses;