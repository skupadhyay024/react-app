import React from 'react';

function Header(){
    return(
        <nav>
            <a href="/">Home</a> | {" "}
            <a href="/about">About</a>| {" "}
            <a href="/coursesPage">Courses</a>
        </nav>
    )

}

export default Header;