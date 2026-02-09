import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Timer from './components/Timer'
import ButtonSection from './components/ButtonSection'
import './App.css'

function App() {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  })

  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => {
          let { hour, minute, second } = prev

          second += 1

          if (second === 60) {
            second = 0
            minute += 1
          }

          if (minute === 60) {
            minute = 0
            hour += 1
          }

          return { hour, minute, second }
        })
      }, 1000)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  const startTime = () => setIsRunning(true)

  const stopTime = () => {
    setIsRunning(false)
    clearInterval(intervalRef.current)
  }

  const resetTime = () => {
    stopTime()
    setTime({ hour: 0, minute: 0, second: 0 })
  }

  return (
    <>
      <Header />
      <Timer time={time} />
      <ButtonSection
        startTime={startTime}
        stopTime={stopTime}
        resetTime={resetTime}
      />
    </>
  )
}

export default App
