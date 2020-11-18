import React,{useState } from 'react';
import './Update.css';
import UpdateContent from './UpdateContent';
import {Link } from "react-router-dom";


function Update() {

const[btn , setBtn] = useState('acadamics');

const handleUpdatebtn = (res)=> {
    setBtn(res);
}

    return (
        <div className="update">
            <div class="update_sidebar">
        <div className="update_header">
            <h1>WEB BULLETIN</h1>
            <h3>Student Corner</h3>
        </div>
        <div className="update_show-menu">
            <h3>SHOW MENU</h3></div>
         <div className="update_hamburger">
            <div className="update_line"></div>
            <div className="update_line"></div>
            <div className="update_line"></div>
        </div> 
        <div className="update_menu">
           <li> <Link to="/" style={{textDecoration: 'none' ,color:"inherit" }}>Home</Link></li>
            <li onClick={()=> handleUpdatebtn("notice")}>Notices</li>
            <li onClick={()=> handleUpdatebtn('timetable')}>Timetable</li>
            <li onClick={()=> handleUpdatebtn('datesheet')}>Datesheets</li>
            <li onClick={()=> handleUpdatebtn('results')}>Results</li>
            <li onClick={()=> handleUpdatebtn('notes')}>Notes</li>
            <li onClick={()=> handleUpdatebtn('paper')}>Exam Papers</li>
            <li onClick={()=> handleUpdatebtn('acadamics')}>Academics</li>
            <li onClick={()=> handleUpdatebtn('syallabus')}>Syllabus</li>
            <li onClick={()=> handleUpdatebtn('e-books')}>E-Books</li>
            <li onClick={()=> handleUpdatebtn('contribute')}>Contribute</li>

        </div>
    </div>
        
        <UpdateContent pass={btn}/>
       
        </div>
    )
}

export default Update
