import React from 'react';
import './Update.css';

function Update() {
    return (
        <div className="update">
            <div class="sidebar">
        <div className="header">
            <h1>WEB BULLETIN</h1>
            <h3>Student Corner</h3>
        </div>
        <div className="show-menu">
            <h3>SHOW MENU</h3></div>
        <div className="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div className="menu">
            <li>Home</li>
            <li>Notices</li>
            <li>Timetables</li>
            <li>Datesheets</li>
            <li>Results</li>
            <li>Notes</li>
            <li>Exam Papers</li>
            <li>Academics</li>
            <li>Syllabus</li>
            <li>E-Books</li>

        </div>
        <div className="container">
            <form method="get" action="">
                <input type="text" placeholder="Search..." />
            </form>
        </div>
    </div>
    <div class="content">

    </div>
        </div>
    )
}

export default Update
