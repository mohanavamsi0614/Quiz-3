import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
    const nav=useNavigate()
    const location = useLocation();
    const { state } = location;
    return (
        <div>
            <h1>Result</h1>
            <div>
                <div className="namede">
                <h1>Your Score is {state.correct}</h1>
                    <div className="details">
                        <h2>Total questions</h2>
                        <h2>15</h2>
                    </div>
                    <div className="details">
                        <h2>Attempted</h2>
                        <h2>{state.attempted}</h2>
                    </div>
                    <div className="details">
                        <h2>Correct</h2>
                        <h2>{state.correct}</h2>
                    </div>
                    <div className="details">
                        <h2>Wrong</h2>
                        <h2>{state.wrong}</h2>
                    </div>
                </div>
            </div>
            <div>
                <button className="red" onClick={()=>{nav('/quesion')}}>Play again</button>
                <button className="green" onClick={()=>{nav('/')}}>Back to home</button>
            </div>
        </div>
    );
}

export default Result;
