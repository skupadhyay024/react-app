import React from 'react';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Header from './components/common/Header';


import './App.css';

function App() {
function getPage(){
 const route = window.location.pathname;
 if(route ==="/about")
 return <AboutPage/>;
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
