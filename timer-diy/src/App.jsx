import './App.css'
import ButtonSection from './components/ButtonSection'
import Header from './components/Header'
import Timer from './components/Timer'
import { useState } from 'react'


function App() {

  const [time, setTime] = useState(
    {
      hour: 0,
      minute: 0,
      second: 0
    }
  )

  const startTime = ()=>{


    
    setInterval(()=>{
      setTime(time.second+1)
    },1000)

  }

  return (
    <>
      <Header />
      <Timer time={time}/>
      <ButtonSection setTime={startTime}/>
    </>
  )
}

export default App
