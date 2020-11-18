import React from 'react';
import './Footer.css';

function Footer() {
    return ( 
    
        <div class="footer-section">
            <div className="aboutus">
                <h2>ABOUT US</h2>
                <h1>StudentCorner</h1>
                <p>StudentCorner, the Socio-Academic Portal of YCMA, is the most frequently visited website of YMCA. It was started out by a team of two enthusiastic students with an aim to provide a holistic solution to all student needs; those that are encountered during these four crucial years of college. </p>

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
            <div className="social">
            <h3>Contact us</h3>
              <div className="social-list"><img className="footer_icon" src="./images/i5.png" alt="" /><span>ymca,faridabad</span></div>
              <div className="social-list"><img className="footer_icon" src="images/i6.png" alt="" /><span>studentcornerymca@gmail.com</span></div>
              <div className="social-list"><img className="footer_icon" src="images/i7.png"  alt="" /><span>9817620774</span></div>
              
            </div>
        </div>
    )
}

export default Footer
