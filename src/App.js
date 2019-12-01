import React from 'react';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Header from './components/common/Header';


import './App.css';
import CoursesPage from './components/CoursesPage';

function App() {
function getPage(){
 const route = window.location.pathname;
 if(route ==="/about") {
 return <AboutPage/>;
 }else if(route ==='/coursesPage'){
     return <CoursesPage/>;
 }
 return <HomePage/>;
}
return (
<div className="container-fluid">
<Header/>
{ getPage()} 
</div>
);
}

export default App;
