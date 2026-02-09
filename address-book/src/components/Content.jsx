import AddressItem from "./AddressItem";

const Content= ({address})=>{


  return(<>
    <div>
      {address.map((item)=>(
        <AddressItem key={item.name}{...item}/>
      ))}
    </div>
  </>)
}

export default Content;