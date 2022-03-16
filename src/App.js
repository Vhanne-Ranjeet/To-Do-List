import { useState } from "react";
import { v4 } from "uuid";
import List from "./components/List";
import "./styles.css";
export default function App() {
  const [inputVal, setInputval] = useState("");
  const [toDoList, setTodo] = useState([
    { item: "Reading book", key: v4() },
    { item: "Project work", key: v4() }
  ]);
  const [check, setCheck] = useState(false);
  const [editid, seteditid] = useState();
  let handler = (e) => {
    setInputval(e.target.value);
  };
  let addList = (e) => {
    if (inputVal !== "") {
      setTodo([...toDoList, { item: inputVal, key: v4() }]);
      setInputval("");
    } else {
      alert("Enter to do:");
    }
  };
  let addList2 = (e) => {
    const editedData = toDoList.map((mdata) => {
      if (mdata.key === editid) {
        mdata.item = inputVal;
      }
      return mdata;
    });
    setTodo(editedData);
    setCheck(false);
    setInputval("");
    alert("To do updated.");
  };
  return (
    <div className="App">
      <h3 className="heading">To-Do List</h3>
      {check ? (
        <div className="subDiv">
          <input className="subDiv" value={inputVal} onChange={handler} />
          <button className="btnupdate" onClick={addList2}>
            Update
          </button>
        </div>
      ) : (
        <div>
          <input className="subDiv" value={inputVal} onChange={handler} />
          <button className="btnadd" onClick={addList}>
            Add
          </button>
        </div>
      )}
      <div className="list">
        {
          <List
            toDoList={toDoList}
            setTodo={setTodo}
            inputVal={inputVal}
            setInputval={setInputval}
            check={check}
            setCheck={setCheck}
            seteditid={seteditid}
          />
        }
      </div>
    </div>
  );
}
