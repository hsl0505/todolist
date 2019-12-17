import React from "react";

const InputToDoList = props => {
  if (
    props.currentToDo === null ||
    props.currentToDo.isEdit === true ||
    props.currentToDo.toDoTitle === "untitled"
  ) {
    return null;
  }

  if (props.isSearched === true || props.currentSearch !== "") {
    return null;
  }

  return (
    <input
      className="todo-list_inputSchedule"
      onChange={props.onChangeToDoListInput}
      placeholder={"Input your schedule"}
      value={props.toDoListCurrentInput}
    />
  );
};

export default InputToDoList;
