import Button from './Button'
import Header from './Header'

import { useParams } from "react-router-dom"

const New = () => {

  const onClickButton = (e) => {
    alert(e.target.innerText);
  }

  const param = useParams();
  console.log(param);

  return (<>
    <Header title={"HEADER"}
      leftChild={<Button text={"LEFT"} onClick={onClickButton} type={"POSITIVE"} />}
      rightChild={<Button text={"RIGHT"} type={"NEGATIVE"} onClick={onClickButton} />}
    />
  </>)

}

export default New
