import './App.css'
import Home from './componuds/home'
import Q from './componuds/quesions'
import Result from './componuds/result'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quesion' element={<Q/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
     {/* <Q/> */}
     {/* <Result/> */}
    </>
  )
}

export default App
