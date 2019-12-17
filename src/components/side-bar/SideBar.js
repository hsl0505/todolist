import React from "react";
import Search from "./search/Search";
import Scheduled from "./scheduled/Scheduled";
import ToDo from "./todo/ToDo";
import AddToDo from "./addToDo/AddToDo";

const SideBar = props => {
  return (
    <div className="side-bar">
      <Search
        searchChangeHandle={props.searchChangeHandle}
        currentSearch={props.currentSearch}
        searchClickHandle={props.searchClickHandle}
      />
      <Scheduled />
      <ToDo
        toDo={props.toDo}
        toDoClickHandle={props.toDoClickHandle}
        deleteToDoEntry={props.deleteToDoEntry}
      />
      <AddToDo addToDoHandle={props.addToDoHandle} />
    </div>
  );
};

export default SideBar;

// class SideBar extends Component {
//   render() {
//     return (
//       <div>
//         sidebar
//         <Search />
//         <Scheduled />
//         <ToDo />
//         <AddToDo />
//       </div>
//     );
//   }
// }
