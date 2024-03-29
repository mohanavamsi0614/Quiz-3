import  { useState } from 'react';
import data from './qusions';
import { useNavigate } from 'react-router-dom';

function Q() {
    const [qno, setQno] = useState(0);
    const [datha, setDatha] = useState({ attempted: 0, correct: 0, wrong: 0 });
    const navigate = useNavigate();
    const [used,setused]=useState([])

    function checker(selectedOption) {
        const currentQuestion = data[qno];
        if (currentQuestion.answer === selectedOption) {
            alert("Correct");
            setused([...used,qno])
            setDatha({ ...datha, correct: datha.correct + 1, attempted: datha.attempted + 1 });
            next()

        } else if (!used.includes(qno)) {
            alert("Wrong")
            setused([...used,qno])
            setDatha({ ...datha, wrong: datha.wrong + 1, attempted: datha.attempted + 1 });
            next()
        }
    }
    const handleEClick=()=>{
        alert("last quesion")
        navigate("/result",{state:datha})
    }

    const handleEndClick = () => {
        console.log("Data to be passed:", datha);
        navigate("/result", { state: datha } );
    };
    const next=()=>{
        setQno(qno === data.length - 1 ? handleEClick(): qno + 1)
    }
    return (
        <div className="que">
            <h1>Question</h1>
            <p className="qu">{qno + 1} of {data.length}</p>
            <h3>{data[qno].question}</h3>
            <div className="ops">
                <button className="op" onClick={() => checker(data[qno].optionA)}>{data[qno].optionA}</button>
                <button className="op" onClick={() => checker(data[qno].optionB)}>{data[qno].optionB}</button>
                <button className="op" onClick={() => checker(data[qno].optionC)}>{data[qno].optionC}</button>
                <button className="op" onClick={() => checker(data[qno].optionD)}>{data[qno].optionD}</button>
            </div>
            <div className="controls">
                <button className="red" onClick={() => setQno(qno === 0 ? 0 : qno - 1)}>Prev</button>
                <button className="green" onClick={next}>Next</button>
                <button className="red" onClick={handleEndClick}>End</button>
            </div>
        </div>
    );
}
export default Q;
