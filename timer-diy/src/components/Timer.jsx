const Timer = ({time})=>{



  return (<>
    <h1>{time.hour}:{time.minute}:{time.second}</h1>
  </>)
}

export default Timer;