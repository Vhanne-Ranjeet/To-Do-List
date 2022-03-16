import React from "react";
const List = (props) => {
  let deleteHand = (key) => {
    const filterdata = props.toDoList.filter((idata) => {
      return idata.key !== key;
    });
    props.setTodo(filterdata);
    props.setInputval("");
    alert("To do deleted.");
  };
  const editHandel = (edata) => {
    const newid = props.toDoList.find((fdata) => {
      return fdata.key === edata;
    });
    props.setInputval(newid.item);
    props.setCheck(true);
    props.seteditid(newid.key);
  };
  return (
    <>
      <ul>
        {props.toDoList.map((e, index) => {
          return (
            <li key={index}>
              {e.item}
              <button
                className="deletebtn"
                onClick={() => {
                  deleteHand(e.key);
                }}
              >
                Delete
              </button>
              <button
                className="editbtn"
                onClick={() => {
                  editHandel(e.key);
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default List;
