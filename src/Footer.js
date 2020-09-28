import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div class="footer-section">
            <div className="aboutus">
                <h2>ABOUT US</h2>
                <h1>StudentCorner</h1>
                <p>CollegeSpace, the Socio-Academic Portal of NSIT, is the most frequently visited website of NSIT. It was started out by a team of three enthusiastic students with an aim to provide a holistic solution to all student needs; those that are encountered during these four crucial years of college. Now, after five successful years, we have a large team of hardworking & committed students working in various departments such as web development, content writing & content collection. In short - We aim to make the life of every NSITian simpler & turn these four years into a smoother ride!</p>

            </div>
            <div className="quick-links">
                <ul type="circle">
                <li>Notices</li>
                <li>Datesheets</li>
                <li>Results</li>
                <li>Notes</li>
                <li>Exam papers</li>
                <li>Syallabus</li>
                <li>Disclaimer</li>
                <li>Copyright</li>
                </ul>
            </div>
            <div className="tweats">
               <h1>Tweets section </h1>
            </div>
        </div>
    )
}

export default Footer
