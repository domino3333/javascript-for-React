import { useState } from "react";



const Adder = ({addAddress}) => {

  //input을 바라보는 onChange가 있어야 함
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const observeName = (e) => {
    setName(e.target.value);
  }
  const observePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }
  const observeEmail = (e) => {
    setEmail(e.target.value);
  }

  const clickAddButton = ()=>{

    addAddress(name,phoneNumber,email);
  }





  return (<>
    <input type="text" placeholder="이름" onChange={observeName} /><br />
    <input type="text" placeholder="전화번호" onChange={observePhoneNumber} /><br />
    <input type="text" placeholder="이메일" onChange={observeEmail} /><br />
    <button type="button" onClick={clickAddButton}>연락처에 추가</button><br/>
  </>)
}

export default Adder;