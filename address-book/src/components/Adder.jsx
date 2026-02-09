import { useState } from "react";



const Adder = ({ addAddress }) => {

  //input을 바라보는 onChange가 있어야 함
  const [input, setInput] = useState({})

  const observeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }


  const clickAddButton = () => {

    addAddress(input);
  }

  return (<>
    <input value={input.name}name="name" type="text" placeholder="이름" onChange={observeInput} /><br />
    <input name="phoneNumber" type="text" placeholder="전화번호" onChange={observeInput} /><br />
    <input type="text" name="email" placeholder="이메일" onChange={observeInput} /><br />
    <button type="button" onClick={clickAddButton}>연락처에 추가</button><br />
  </>)
}

export default Adder;