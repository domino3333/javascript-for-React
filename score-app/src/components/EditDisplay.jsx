import { useState } from "react";
import "./EditDisplay.css";

const EditDisplay = ({ id, name, kor, eng, mat, clickCompleteButton,setMode }) => {

  const [input, setInput] = useState({
    id: id,
    name: name,
    kor: kor,
    eng: eng,
    mat: mat
  });

  const observeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="edit-container">
      <div className="edit-card">

        <h2 className="edit-title">✏️ 성적 수정</h2>

        <div className="form-group">
          <label>학번</label>
          <input type="text" name="id" readOnly value={id} />
        </div>

        <div className="form-group">
          <label>이름</label>
          <input type="text" name="name" defaultValue={name} onChange={observeInput} />
        </div>

        <div className="form-group">
          <label>국어</label>
          <input type="text" name="kor" defaultValue={kor} onChange={observeInput} />
        </div>

        <div className="form-group">
          <label>영어</label>
          <input type="text" name="eng" defaultValue={eng} onChange={observeInput} />
        </div>

        <div className="form-group">
          <label>수학</label>
          <input type="text" name="mat" defaultValue={mat} onChange={observeInput} />
        </div>

        <div className="button-group">
          <button className="back-btn" type="button" onClick={()=>setMode("list")}>뒤로가기</button>
          <button
            className="complete-btn"
            type="button"
            onClick={() =>
              clickCompleteButton(
                input.id,
                input.name,
                input.kor,
                input.eng,
                input.mat
              )
            }
          >
            완료
          </button>
        </div>

      </div>
    </div>
  )
}

export default EditDisplay;
