import { useNavigate } from "react-router-dom"

function Home() {
    const nav=useNavigate()
    return(
    <>
    <h1>Quiz App</h1>
    <button className="start" onClick={()=>{nav('/quesion')}}>Play</button>
    </>
    )
}
export default Home