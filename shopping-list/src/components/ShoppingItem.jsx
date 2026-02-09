const ShoppingItem = ({id,name,price,deleteGoods})=>{

  return(<>
    <p>id:{id} 이름:{name} 가격:{price}</p>
    <button type="button" onClick={()=>deleteGoods(id)}>삭제</button>
  </>)
}

export default ShoppingItem;