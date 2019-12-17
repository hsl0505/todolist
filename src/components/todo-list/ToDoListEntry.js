import React, { Component } from "react";
import deleteicon from "../../xbutton.png";
import improicon from "../../important.png";

class ToDoListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "",
      textDecoration: "",
      fontStyle: ""
    };
    this.changeColor = this.changeColor.bind(this);
    this.complete = this.complete.bind(this);
  }

  changeColor() {
    let backColor;
    if (this.state.backgroundColor === "red") {
      backColor = "";
    } else {
      backColor = "red";
    }
    this.setState({
      backgroundColor: backColor
    });
  }
  // text-decoration:line-through
  complete() {
    let textDeco;
    let fontStyle;
    let backColor;
    if (this.state.textDecoration === "") {
      textDeco = "line-through";
      fontStyle = "italic";
      backColor = "green";
    } else {
      textDeco = "";
      fontStyle = "";
      backColor = "";
    }
    this.setState({
      textDecoration: textDeco,
      fontStyle: fontStyle,
      backgroundColor: backColor
    });
  }

  render() {
    return (
      <div className="todo-list_entryone">
        <div
          className="entryone_content"
          style={{
            width: "80%",
            fontSize: "x-large",
            backgroundColor: this.state.backgroundColor,
            textDecoration: this.state.textDecoration,
            fontStyle: this.state.fontStyle
          }}
          onClick={this.complete}
        >
          {this.props.entry.toDoListValue}
        </div>
        <div className="entryone_btns">
          <img
            className="entryone_deleteicon"
            onClick={() => this.props.deleteToDoListEntry(this.props.entry)}
            src={deleteicon}
            alt="x"
          />
          <img
            className="entryone_imp"
            onClick={this.changeColor}
            src={improicon}
            alt="x"
          />
        </div>
      </div>
    );
  }
}

// const ToDoListEntry = props => {
//   return (
//     <div>
//       <div>{props.entry.toDoListValue}</div>
//       <button onClick={() => props.deleteToDoListEntry(props.entry)}>
//         delete
//       </button>
//       <button onClick={() => }>중요 !</button>
//     </div>
//   );
// };

export default ToDoListEntry;
