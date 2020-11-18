import React from 'react';
import Timetable from './Timetable';
import './UpdateContent.css';
import Notice from './Notice';
import Notes from './Notes';
import Syallabus from './Syallabus';
import Contribute from './Contibute';
import Acadamics from './Acadamics';


function UpdateContent({pass}) {

    const updateInfo = (pass)=> {
    switch(pass)
    {
        case 'timetable':
            return (
                <Timetable />
            );
            case 'notice':
                return (<Notice /> );
                case 'notes':
                    return (<Notes />);
            case 'syallabus':
                return (<Syallabus />);
            case 'contribute':
                return (<Contribute />);
            case 'acadamics':
                return (<Acadamics />);
            default:
                return(
                    <Notice />
                )
    }

    }
    return (

        <div className="update-content">
            <div class="update-header">
                <h2>Student Corner</h2>
                <hr />
                <br />
                <p>{pass}</p>
            </div>
            {updateInfo(pass)}
            <div className="update-footer">
                <div className="update-footer-03">
                    <button>Older posts</button>
                </div>
                <div className="update-footer-01">
                </div>
                <div className="update-footer-02">
                    <p>© 2020 WEB BULLETIN</p>
                    <p>THEME BY SAINI KHAN <span>-UP↑</span></p>
                </div>
            </div>
        </div>
    )
}

export default UpdateContent
