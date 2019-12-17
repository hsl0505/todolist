import React from "react";
import ToDoListEntry from "./ToDoListEntry";
import SearchPage from "./SearchPage";

const ToDoListWindow = props => {
  if (props.currentToDo === null && props.currentSearch === "") {
    return null;
  }

  if (props.currentSearch !== "" && props.isSearched !== true) {
    return (
      <SearchPage
        currentSearch={props.currentSearch}
        searchList={props.searchList}
      />
    );
  }

  if (props.isSearched === true) {
    return (
      <SearchPage
        currentSearch={props.currentSearch}
        searchList={props.searchList}
        searched={props.searched}
      />
    );
  }

  if (
    props.currentToDo.isEdit === true ||
    props.currentToDo.toDoTitle === "untitled"
  ) {
    return (
      <div className="firstcreatmessage">
        <div className="firstcreatmessage_content">Edit Untitled !!!</div>
      </div>
    );
  }

  const arr = props.toDoListGrouping;
  const mapArr = arr.map(entry => (
    <ToDoListEntry
      key={entry.toDoListId}
      entry={entry}
      deleteToDoListEntry={props.deleteToDoListEntry}
    />
  ));
  return <div className="todo-list-window">{mapArr}</div>;
};

export default ToDoListWindow;
