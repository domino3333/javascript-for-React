import '../css/Sub.css'


const Button = ({ text, color = "black", children,setCount }) => {
  //이벤트 처리 기능 핸들러 함수(3가지 : 함수선언, 함수표현, 화살표함수)


  const onClickButton = (e) => {
    alert(`${text}+${color}`);
    console.log();
  }
  return (
    <>
      <button
        onClick={onClickButton}
        style={{ color }}
        type="button">

        {text}-{color.toUpperCase()}{children}

      </button>
    </>
  )


}

export default Button;

