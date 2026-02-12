import { useState } from "react";
import '../css/Adder.css'


const Adder = ({ addMember }) => {
  const [input, setInput] = useState(null);

  const observeInputData = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="adder-container">
      <h2 className="adder-title">성적 등록</h2>

      <div className="adder-form">
        <label className="adder-label">
          이름
          <input
            className="adder-input"
            onChange={observeInputData}
            type="text"
            name="name"
          />
        </label>

        <label className="adder-label">
          국어
          <input
            className="adder-input"
            onChange={observeInputData}
            type="number"
            name="kor"
          />
        </label>

        <label className="adder-label">
          수학
          <input
            className="adder-input"
            onChange={observeInputData}
            type="number"
            name="eng"
          />
        </label>

        <label className="adder-label">
          영어
          <input
            className="adder-input"
            onChange={observeInputData}
            type="number"
            name="mat"
          />
        </label>

        <button
          className="adder-button"
          type="button"
          onClick={() => addMember(input)}
        >
          등록하기
        </button>
      </div>
    </div>
  );
};

export default Adder;
