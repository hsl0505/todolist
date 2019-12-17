import React from "react";
import xbutton from "../../../xbutton.png";

const ToDoEntry = props => {
  return (
    <div className="todo_entry">
      <div
        className="todo_entry_entry"
        onClick={() => props.toDoClickHandle(props.entry)}
      >
        {props.entry.toDoTitle}
      </div>
      <img
        className="todo_entry_delete-btn x-btn"
        src={xbutton}
        alt="없음"
        onClick={() => props.deleteToDoEntry(props.entry)}
      />
    </div>
  );
};

export default ToDoEntry;
