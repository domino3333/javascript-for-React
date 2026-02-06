//회원가입 폼
// 1.이름 2.생년월일 3.국적 4.자기소개

import { use, useState } from 'react';


// const [name, setName] = useState("이름 입력");
// const [birth, setBirth] = useState("");
// const [national, setNational] = useState("");
// const [bio, setBio] = useState("");
const Register = () => {

  const [input, setInput] = useState({
    name: '이름 입력',
    birth: '',
    national: '',
    bio: '',
  });

  const onChange = (e) => {
    console.log(e);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    }

    );
  }


  return (
    <>
      <div>
        <label htmlFor="name">성명</label>
        <input value={input.name} type="text" name="name" id="name" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="birth">생년월일</label>
        <input value={input.birth} type="date" name="birth" id="birth" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="national">국적</label>
        <select value={input.national} name="national" id="national" onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
      </div>
      <div>
        <label htmlFor="bio">자기소개</label>
        <textarea value={input.bio} name="bio" id="bio" col="30" rows="10" onChange={onChange}></textarea>
      </div>
    </>
  )
}

export default Register;
