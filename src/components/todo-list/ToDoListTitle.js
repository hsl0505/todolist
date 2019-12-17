import React from "react";
import editicon from "../../edit2.png";
import saveicon from "../../ok.png";
import cancelicon from "../../xbutton.png";

const ToDoListTitle = props => {
  if (props.currentToDo === null && props.currentSearch === "") {
    return (
      <div className="defalt_message">
        <div className="defalt_message_content">
          Hi ! Welcome to ToDoList By HS !
        </div>
      </div>
    );
  }

  if (props.currentToDo === null) {
    return null;
  }

  if (props.isSearched === true || props.currentSearch !== "") {
    return null;
  }

  let commonView = (
    <div className="todo-list_commonview">
      <div className="commonview_title">{props.currentToDo.toDoTitle}</div>
      <img
        className="commonview_icon"
        onClick={() => props.changeTitleHandle(props.currentToDo)}
        src={editicon}
        alt="없음"
      />
    </div>
  );

  let editView = (
    <div className="todo-list_editview">
      <input
        className="editview_input"
        placeholder={props.currentToDo.toDoTitle}
        onChange={props.changeTitleOnChange}
      />
      <img
        className="editview_saveicon"
        onClick={props.changeTitleSave}
        src={saveicon}
        alt="x"
      />
      <img
        className="editview_cancelicon"
        onClick={props.changeTitleCancel}
        src={cancelicon}
        alt="x"
      />
    </div>
  );

  return (
    <div className="todo-list_title">
      {props.currentToDo.isEdit ? editView : commonView}
    </div>
  );
};

export default ToDoListTitle;
