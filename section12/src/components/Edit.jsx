import { useState } from "react";
import { useSearchParams } from "react-router-dom"

const Edit = () => {

  const [name2, setName2] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const onClickChangeName = (e) => {
    setSearchParams({ name: name2 })
  }

  const onChageName = (e) => {
    setName2(e.target.value);
  }

  return (<>
    <h1>Edit {`name = ${searchParams.get("name") ?? "홀길동"}`}님 환영합니다.</h1>
    <input value={name2} onChange={onChageName} type="text" name="name" id="name" />
    <button onClick={onClickChangeName}>이름 바꾸기</button>
  </>)
}

export default Edit