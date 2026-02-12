import Header from "./Header"
import Button from './Button'
import DiaryList from "./DiaryList"
import { DiaryStateContext } from "../App"
import { useContext, useState } from "react"


const Home = () => {

  //공유 props 가져오기
  const state = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  //이전 달, 다음 달 이벤트 처리
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))

  }



  //26년 2월에 해당하는 일기만 필터링한다.
  //2월1일~
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  //~3월 0일
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

  const monthData = state.filter((item) => item.createdDate >= beginTime && item.createdDate <= endTime);

  const onClickButton = (e) => {
    alert(e.target.innerText);
  }
  return (<>
    <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
      leftChild={<Button text={"<이전달"} onClick={onDecreaseMonth} />}
      rightChild={<Button text={"다음달>"} onClick={onIncreaseMonth} />}
    />
    <DiaryList monthData={monthData} />
  </>)
}

export default Home