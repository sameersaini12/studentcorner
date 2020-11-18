import React,{useState , useEffect} from 'react';
import './Notes.css';

function Notes() {

    const[sem , setSem] = useState({value: "first"});
    const[branch , setBranch] = useState({value: "ce"});
    const[getNotes , setGetNotes] = useState(false);

    useEffect(() => {
        setGetNotes(false)
    }, [sem , branch])

    const handleSubmit = () => {
        setGetNotes(true);
    }
    const subList = (sem , branch) => {
        if(sem.value==="second" && branch.value ==="ce")
        {
            return (
                <>
                    <table className="subject-table">
                        <thead>
                        <tr>
                        <th>Subjects</th>
                        <th>Download</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>AEC</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Maths</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>ETC</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>DSA</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Scilab</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>DE</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>AEC LAB</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>DSA LAB</td>
                                <td></td>
                            </tr>
                        </tbody>
                       
                    </table>
                </>
            )
        }
    }

    return (
        <div className="notes">
            <div className="notes-container">
                <label>Year 
                <select onChange= {e => setSem({value: e.target.value})}>
                    <option value="first" >First</option>
                    <option value="second" >Second</option>
                    <option value="third" >Third</option>
                    <option value="fourth" >Fourth</option>
                </select>
                </label>
                <br />
                <label>Branch
                <select onChange= {e => setBranch({value: e.target.value})}>
                    <option value="ce" >CE</option>
                    <option value="it" >IT</option>
                    <option value="mechanical" >Mechanical</option>
                    <option value="ecs" >ECS</option>
                    <option value="ece" >ECE</option>
                    <option value="civil" >Civil</option>
                </select>
                </label>
                <br />
                <button type="submit" onClick={handleSubmit} >Get Notes</button>
            </div>
            <div className="notes-list">
                {(getNotes)?subList(sem , branch): ""}
            </div>
        </div>
    )
}

export default Notes
