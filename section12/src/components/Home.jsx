import Header from "./Header"
import Button from './Button'
import DiaryList from "./DiaryList"
const Home = () => {

  const onClickButton = (e) => {
    alert(e.target.innerText);
  }
  return (<>
    <Header title={"2026년 02월 12일"}
      leftChild={<Button text={"<이전달"} />}
      rightChild={<Button text={"다음달>"}/>}
    />
    <DiaryList/>
  </>)
}

export default Home