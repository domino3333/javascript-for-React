import MemberItem from "./MemberItem";
import { useState } from "react";
import '../css/List.css'

const List = ({ memberList, deleteItem,updateItem }) => {
  const [searchbox, setSearchBox] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const observeSearchBox = (e) => {
    setSearchBox(e.target.value);
  };

  const clickSearchButton = () => {
    setSearchKeyword(searchbox);
  };

  const getFilteredData = () => {
    if (searchKeyword === '') return memberList;

    const searchedMember = memberList.filter((member) =>
      member.name.includes(searchKeyword)
    );

    return searchedMember;
  };

  const filteredData = getFilteredData();

  return (
    <div className="list-container">
      <div className="search-bar">
        <input
          className="search-input"
          onChange={observeSearchBox}
          placeholder="검색어 입력"
          type="text"
          name="searchBox"
          id="searchBox"
        />
        <button
          className="search-button"
          type="button"
          onClick={clickSearchButton}
        >
          검색
        </button>
      </div>

      <div className="member-list">
        {filteredData.map((member) => (
          <MemberItem
            key={member.id}
            {...member}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
