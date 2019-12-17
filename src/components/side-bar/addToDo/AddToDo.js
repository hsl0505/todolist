import React from "react";
import plus from "../../../plus.jpg";

const AddToDo = props => {
  return (
    <div className="side-bar_addbtn" onClick={props.addToDoHandle}>
      <img className="addbtn +-btn" src={plus} alt="없음" />
      <div className="addbtn_content">Add To Do</div>
      {/* <img src={plus} alt="없음" /> */}
      {/* </button> */}
    </div>
  );
};

// class AddToDo extends Component {
//   render() {
//     return <div>- 여긴 투두 큰목록 추가</div>;
//   }
// }

export default AddToDo;
