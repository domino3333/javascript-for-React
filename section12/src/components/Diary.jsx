import Header from './Header'
import Button from './Button'
import { useNavigate, useParams } from 'react-router-dom'
import Viewer from './Viewer'
import { DiaryStateContext } from '../App'
import { useContext, useMemo } from "react";


//날짜를 문자열로 리턴하는 함수
const getStringDate = (targetDate) => {
  //yyyy-mm-dd 형식
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`
  if (date < 10) date = `0${date}`
  return `${year}-${month}-${date}`;
}

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(DiaryStateContext)

  const curDiaryItem = useMemo(() => {
    return data.find((item) => String(item.id) === String(params.id));
  }, [data, params.id]); // data나 id가 바뀔 때만 다시 계산

  if (!curDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  const title = getStringDate(new Date(curDiaryItem.createdDate))

  return <>
    <Header title={`${title} 기록된 일기`}
      leftChild={<Button text={"<뒤로가기"} onClick={()=>nav(-1)}/>}
      rightChild={<Button text={"수정하기>"} onClick={()=>nav(`/edit/${params.id}`)} />}
    />
    <Viewer emotionId={curDiaryItem.emotionId} content={curDiaryItem.content}/>
  </>
}
export default Diary;