const ButtonSection = ({startTime, stopTime, resetTime})=>{



  return (<>
      <button type="button" onClick={startTime}>시작</button>
      <button type="button" onClick={stopTime}>정지</button>
      <button type="button" onClick={resetTime}>초기화</button>
  </>)
}

export default ButtonSection;