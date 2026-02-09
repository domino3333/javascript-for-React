import { useState } from "react";



const InputController = ({setResult})=>{


  const[num1,setNum1] = useState(0);
  const[num2,setNum2] = useState(0);


  const observeNum1 = (e)=>{
    setNum1(Number(e.target.value));

  }
  const observeNum2 = (e)=>{
    setNum2(Number(e.target.value));

  }

  const add = ()=>{
    setResult(num1+num2)
  }
  const sub = ()=>{
    setResult(num1-num2)
  }
  const divide = ()=>{
    setResult(num1/num2)
  }
  const mod = ()=>{
    setResult(num1%num2)
  }


  return(<>
  <label htmlFor="number1">첫번째 숫자:
    <input type="number" name="num1" id="num1" onChange={observeNum1} />
  </label><br/>
  <label htmlFor="number2">두번째 숫자:
    <input type="number" name="num2" id="num2" onChange={observeNum2} />
  </label>

<br/>
  <button type="button" onClick={add}>+</button><br/>
  <button type="button" onClick={sub}>-</button><br/>
  <button type="button" onClick={divide}>/</button><br/>
  <button type="button" onClick={mod}>%</button><br/>

  </>)
}

export default InputController;