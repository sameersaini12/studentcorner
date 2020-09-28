import React from 'react';
import './Registration.css'

function Registration() {
    return (
        <div className="registration">
            <div className="registration-section">
                <div className="registration-info">
                    <div className="registration-info-1">
                        <div className="registration-info-1-1">
                            <div className="registration-info-1-1-1">
                            <h2>NOTICES</h2>
                            <p>Check out the latest updates from YMCA admin without any hassle. Now no more running to the admin at the last minute.</p>
                            </div>
                            <div className="registration-info-1-1-1">
                                <h2>NOTES AND PAPERS</h2>
                                <p>Find the notes and previous year examination papers for all semesters. Additionally, class assignments and lab work to get you going for that perfect grade.</p>
                            </div>
                        </div>
                        <div className="registration-info-1-1">
                            <div className="registration-info-1-1-1">
                                <h2>YMCAPEDIA</h2>
                                <p>The ultimate destination to explore NSIT! A single platform that presents a humongous pack of movie and food reviews, latest technological releases, thought provoking poetries and the latest trends in the campus.</p>
                            </div>
                            <div className="registration-info-1-1-1">
                                <h2>SOCIETIES AND FACULTY AT NSIT</h2>
                                <p>
                                Myriad of societies and our experienced faculty make NSIT what it is. Read on to find out about your honorable professors, society events and much more!</p>
                            </div>
                        </div>
                    </div>
                    <div className="registration-form">
                        <h2>SEARCH FOR NOTES</h2>
                        <hr />
                        <input type="text" placeholder="Keyword" /><br />
                        <input type="text" placeholder="Branch" /><br />
                        <input type="text" placeholder="Semester" /><br />
                        <button type="submit" className="btn">SEARCH</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Registration
