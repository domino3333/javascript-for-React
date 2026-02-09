import ShoppingItem from "./ShoppingItem";
import { useState } from "react";

const ShoppingList = ({ goods }) => {


  //검색창에 입력된 텍스트를 state
  const[inputData, setInputData] = useState("");
  //실제로 검색할 키워드 state
  const[completedKeyword,setCompletedKeyword] = useState("");

  const observeNameData = (e)=>{
    setInputData(e.target.value);
  }

  const clickSearchButton = ()=>{
    //클릭버튼 누르면 그 키워드를 기준으로 필터된 것으로 다시 화면을 그려야 함
    setCompletedKeyword(inputData);
  }

  function filteredData(){

    if(completedKeyword ==='') return goods;
    const data = goods.filter((item)=>
      item.name.includes(completedKeyword)
    )

    return data;
  }

  const filteredDatas = filteredData();

  return (<>
    {filteredDatas.map((item) =>
      (< ShoppingItem key={item.id}{...item} />)
    )}
    <br/>
    <input onChange={observeNameData}type="text" placeholder="검색할 상품의 이름"/>
    <button type="button" onClick={clickSearchButton}>검색</button>
  </>)


}

export default ShoppingList;