import '../css/MemberItem.css';
import { useState } from 'react';

const MemberItem = ({ id, name, kor, eng, mat, deleteItem, updateItem }) => {
  const total = Number(kor) + Number(eng) + Number(mat);
  const average = (total / 3).toFixed(1);

  return (
    <div className="member-card">
      <div className="member-info">
        <div className="member-header">
          <span className="member-id">{id}</span>
          <span className="member-name">{name}</span>
        </div>

        <div className="member-score">
          <p>총합 <strong>{total}</strong></p>
          <p>평균 <strong>{average}</strong></p>
        </div>
      </div>

      <div className="member-actions">
        <button
          className="member-edit-button"
          type="button"
          onClick={() => updateItem(id, name, kor, eng, mat)}
        >
          수정
        </button>
        <button
          className="member-delete-button"
          type="button"
          onClick={() => deleteItem(id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default MemberItem;
