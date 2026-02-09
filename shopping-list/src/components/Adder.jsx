import { useState } from "react";


const Adder = ({ addGoods }) => {

  //input에 들어가는 데이터를 state로 관리하기
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);



  const observeNameData = (e) => {
    setName(e.target.value);

  }
  const observePriceData = (e) => {
    setPrice(e.target.value);
  }

  const clickAddButton = (e) => {


    addGoods(name, price);
  }

  const enterKeyDown = (e) => {
    if (e.key === 'Enter') {
      addGoods(name, price);
      setName('')
      setPrice(0)

    }

  }


  return (<>
    <input value={name} placeholder="추가할 상품 입력" onChange={observeNameData} />
    <input type="number"
      placeholder="추가할 상품의 가격 입력"
      onChange={observePriceData}
      onKeyDown={enterKeyDown}
      value={price}
    />
    <button type="button" onClick={clickAddButton}>추가</button>
  </>)


}

export default Adder;