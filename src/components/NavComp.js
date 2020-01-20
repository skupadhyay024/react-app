import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Authors from './Authors';
import Courses from './courses/Courses';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CourseForm from './courses/CourseForm_1';
import Navbar from 'react-bootstrap/Navbar';
import ManageCoursePage from './courses/ManageCoursePage';

function NavComp(){
    return(
        <>
        <Router>
            <div>
                <h2>Welcome to React tutorial</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/about'} className="nav-link"> About </Link></li>
                        <li><Link to={'/authors'} className="nav-link"> Authors </Link></li>
                        <li><Link to={'/courses'} className="nav-link"> Courses </Link></li>
                        <li><Link to={'/contact'} className="nav-link"> Contact </Link></li>
                    </ul>
                     </nav>
                     <hr />
                     <Switch>
<Route exact path='/' component = { Home } />
<Route exact path='/contact' component = { Contact } />
<Route exact path='/about' component = { About } />
<Route exact path='/courses' component = { Courses } />
<Route exact path='/course/:slug' component = { ManageCoursePage } />
<Route exact path='/authors' component = { Authors } />
<Route exact path='/newCourse' component = { CourseForm } />

                     </Switch>
            </div>
        </Router>
        </>
    )

}

export default NavComp;