import React from "react";
import ToDoListTitle from "./ToDoListTitle";
import AddToDoList from "./AddToDoList";
import ToDoListWindow from "./ToDoLIstWindow";
import InputToDoList from "./InputToDoList";
// import SearchPage from './SearchPage'

const ToDoList = props => {
  return (
    <div className="todo-list">
      <ToDoListTitle
        currentToDo={props.currentToDo}
        changeTitleHandle={props.changeTitleHandle}
        changeTitleCancel={props.changeTitleCancel}
        changeTitleSave={props.changeTitleSave}
        changeTitleOnChange={props.changeTitleOnChange}
        currentSearch={props.currentSearch}
        isSearched={props.isSearched}
      />
      <div className="todo-list_add">
        <InputToDoList
          onChangeToDoListInput={props.onChangeToDoListInput}
          currentToDo={props.currentToDo}
          toDoListCurrentInput={props.toDoListCurrentInput}
          currentSearch={props.currentSearch}
          isSearched={props.isSearched}
        />
        <AddToDoList
          currentToDo={props.currentToDo}
          addToDoListHandle={props.addToDoListHandle}
          currentSearch={props.currentSearch}
          isSearched={props.isSearched}
        />
      </div>
      <ToDoListWindow
        currentToDo={props.currentToDo}
        toDoListGrouping={props.toDoListGrouping}
        deleteToDoListEntry={props.deleteToDoListEntry}
        currentSearch={props.currentSearch}
        searchList={props.searchList}
        isSearched={props.isSearched}
        searched={props.searched}
      />
    </div>
  );
};

export default ToDoList;

// class ToDoList extends Component {
//   render() {
//     return <div>ToDoList</div>;
//   }
// }
