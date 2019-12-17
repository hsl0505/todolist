import React from "react";
import addicon from "../../plus.jpg";

const AddToDoList = props => {
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
    <img
      className="todo-list_addSchedule"
      onClick={() => props.addToDoListHandle(props.currentToDo.toDoTitle)}
      src={addicon}
      alt="x"
    />
  );
};

export default AddToDoList;
