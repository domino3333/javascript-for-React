import Button from "./Button";


const DiaryList = () => {

  return (<>
    <div className="DiaryList">
      <div className="menuBar">
        <select name="" id="">
          <option value={"lastest"}>LATEST</option>
          <option value={"oldest"}>OLDEST</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"}/>
      </div>
      <div className="list_wrapper">
        <DiaryItem/>
      </div>

    </div>
  </>)
}

export default DiaryList;