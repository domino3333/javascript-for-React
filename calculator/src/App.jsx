import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Result from './components/Result'
import InputController from './components/InputController'

function App() {

  const [result,setResult] = useState(0);



  return (
    <>
    <Header/>
    <Result result={result}/>
    <InputController setResult={setResult}/>
    </>
  )
}

export default App
