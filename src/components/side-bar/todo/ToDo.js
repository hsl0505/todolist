import React from "react";
import ToDoEntry from "./ToDoEntry";

const ToDo = props => {
  const arr = props.toDo;
  const mapArr = arr.map(entry => {
    return (
      <ToDoEntry
        entry={entry}
        key={entry.toDoId}
        toDoClickHandle={props.toDoClickHandle}
        deleteToDoEntry={props.deleteToDoEntry}
      />
    );
  });
  return (
    <div className="side-bar_todo">
      <div className="todo_title">To-Do</div>
      {mapArr}
    </div>
  );
};

export default ToDo;

// class ToDo extends Component {
//   render() {
//     return <div>- 여긴 투두 큰 목록들</div>;
//   }
// }
