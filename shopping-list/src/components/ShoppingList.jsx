import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ goods }) => {


  return (<>
    {goods.map((item) =>
      (< ShoppingItem key={item.id}{...item} />)

    )}
  </>)


}

export default ShoppingList;