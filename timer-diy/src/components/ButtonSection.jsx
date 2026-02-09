const ButtonSection = ({startTime})=>{


  const startButtonClick = ()=>{
    startTime();

  }


  return (<>
    <button type="type" onClick={startButtonClick}>시작</button>
    <button type="type">정지</button>
    <button type="type">초기화</button>
  </>)
}

export default ButtonSection;