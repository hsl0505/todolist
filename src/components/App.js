import React, { Component } from "react";
import SideBar from "./side-bar/SideBar";
import ToDoList from "./todo-list/ToDoList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      rememberCurTitle: "",
      toDoListCurrentInput: "",
      currentToDo: null,
      toDo: [],
      toDoListArr: [],
      toDoListGrouping: [],
      currentSearch: "",
      isSearched: false,
      searchList: [],
      searched: ""
    };

    // 함수 바인딩
    this.addToDoHandle = this.addToDoHandle.bind(this);
    this.toDoClickHandle = this.toDoClickHandle.bind(this);
    this.changeTitleHandle = this.changeTitleHandle.bind(this);
    this.changeTitleSave = this.changeTitleSave.bind(this);
    this.changeTitleOnChange = this.changeTitleOnChange.bind(this);
    this.addToDoListHandle = this.addToDoListHandle.bind(this);
    this.onChangeToDoListInput = this.onChangeToDoListInput.bind(this);
    this.deleteToDoListEntry = this.deleteToDoListEntry.bind(this);
    this.deleteToDoEntry = this.deleteToDoEntry.bind(this);
    this.changeTitleCancel = this.changeTitleCancel.bind(this);
    this.searchChangeHandle = this.searchChangeHandle.bind(this);
    this.searchClickHandle = this.searchClickHandle.bind(this);
  }

  addToDoHandle() {
    const temp = {
      toDoTitle: "untitled",
      toDoId: `${new Date().getFullYear()}${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}${new Date().getMilliseconds()}`,
      isEdit: false
    };
    this.setState({
      toDo: this.state.toDo.concat(temp)
    });
  }

  toDoClickHandle(toDoEntry) {
    this.setState({
      isSearched: false,
      currentToDo: toDoEntry,
      toDoListGrouping: this.state.toDoListArr.filter(
        entry => toDoEntry.toDoTitle === entry.group
      )
    });
  }

  changeTitleHandle(curToDo) {
    this.setState({
      rememberCurTitle: curToDo.toDoTitle,
      currentToDo: Object.assign({}, this.state.currentToDo, {
        isEdit: true
      })
    });
  }

  changeTitleCancel() {
    this.setState({
      currentToDo: Object.assign({}, this.state.currentToDo, {
        isEdit: false
      })
    });
  }

  changeTitleOnChange(event) {
    const target = event.target;
    this.setState({
      currentToDo: Object.assign({}, this.state.currentToDo, {
        toDoTitle: target.value
      })
    });
  }
  // 타이틀 바뀌면 할일 목록도 따라가야함 -> 클리어 // 중복 타이틀 방지필요 -> 클리어... 사실 중복 되게하려면 타이틀이 아닌 순수 id 가지고 하면 구분이 되지만.. 뒤집어 엎어야됨
  changeTitleSave() {
    const isExist = this.state.toDo.map(ele => ele.toDoTitle);
    if (isExist.includes(this.state.currentToDo.toDoTitle)) {
      return alert("이미 있는 목록입니다!! 다른 이름을 사용하세요");
    } else if (this.state.currentToDo.toDoTitle === "") {
      return alert("목록 이름을 설정하여야 합니다!!");
    }
    this.setState(
      {
        currentToDo: Object.assign({}, this.state.currentToDo, {
          isEdit: false
        })
      },
      () => {
        const forFilter = this.state.currentToDo.toDoId;
        const temp = this.state.toDo.slice();
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].toDoId === forFilter) {
            temp[i].toDoTitle = this.state.currentToDo.toDoTitle;
            break;
          }
        }
        // const forFilter2 = this.state.currentToDo.toDoTitle;
        const forFilter2 = this.state.rememberCurTitle;
        const temp2 = this.state.toDoListArr.slice();
        for (let i = 0; i < temp2.length; i++) {
          if (temp2[i].group === forFilter2) {
            temp2[i].group = this.state.currentToDo.toDoTitle;
          }
        }
        this.setState({ toDo: temp, toDoListArr: temp2 }, () =>
          this.setState({
            toDoListGrouping: this.state.toDoListArr.filter(
              entry => entry.group === this.state.currentToDo.toDoTitle
            )
          })
        );
      }
    );
  }

  onChangeToDoListInput(event) {
    const target = event.target;
    this.setState({
      toDoListCurrentInput: target.value
    });
  }
  // 엔터 입력으로 리펙토링 // esc누르면 취소 리펙토링....
  addToDoListHandle(toDoTitle) {
    const temp = {
      group: toDoTitle,
      toDoListId: `${new Date().getFullYear()}${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}${new Date().getMilliseconds()}`,
      toDoListValue: this.state.toDoListCurrentInput
    };
    if (temp.toDoListValue === "") {
      return alert("할 일을 입력해야 합니다!");
    }
    this.setState({
      toDoListArr: this.state.toDoListArr.concat(temp),
      toDoListCurrentInput: "",
      toDoListGrouping: this.state.toDoListGrouping.concat(temp)
    });
  }

  deleteToDoListEntry(deleteTarget) {
    this.setState({
      toDoListArr: this.state.toDoListArr.filter(
        entry => deleteTarget.toDoListId !== entry.toDoListId
      ),
      toDoListGrouping: this.state.toDoListGrouping.filter(
        entry => deleteTarget.toDoListId !== entry.toDoListId
      )
    });
  }

  deleteToDoEntry(deleteTarget) {
    let temp, temp2;
    if (this.state.currentToDo) {
      if (deleteTarget.toDoId === this.state.currentToDo.toDoId) {
        temp = null;
        temp2 = [];
      } else {
        temp = Object.assign({}, this.state.currentToDo);
        temp2 = this.state.toDoListGrouping.slice();
      }
    } else {
      temp = null;
      temp2 = [];
    }

    this.setState(
      {
        currentToDo: temp,
        toDoListGrouping: temp2,
        toDo: this.state.toDo.filter(
          entry => deleteTarget.toDoId !== entry.toDoId
        ),
        toDoListArr: this.state.toDoListArr.filter(
          entry => deleteTarget.toDoTitle !== entry.group
        )
      },
      () =>
        this.setState({
          searchList: this.state.toDoListArr.filter(
            entry => entry.toDoListValue === this.state.currentSearch
          )
        })
    );
  }

  searchChangeHandle(event) {
    const target = event.target;
    this.setState(
      {
        currentSearch: target.value,
        isSearched: false
      },
      () =>
        this.setState({
          searchList: this.state.toDoListArr.filter(entry =>
            entry.toDoListValue.includes(this.state.currentSearch)
          )
        })
    );
  }

  searchClickHandle() {
    this.setState({
      isSearched: true,
      searched: this.state.currentSearch,
      currentSearch: ""
    });
  }

  render() {
    return (
      <div className="app">
        <SideBar
          addToDoHandle={this.addToDoHandle}
          toDo={this.state.toDo}
          toDoClickHandle={this.toDoClickHandle}
          deleteToDoEntry={this.deleteToDoEntry}
          searchChangeHandle={this.searchChangeHandle}
          currentSearch={this.state.currentSearch}
          searchClickHandle={this.searchClickHandle}
        />
        <ToDoList
          currentToDo={this.state.currentToDo}
          changeTitleHandle={this.changeTitleHandle}
          changeTitleCancel={this.changeTitleCancel}
          changeTitleSave={this.changeTitleSave}
          changeTitleOnChange={this.changeTitleOnChange}
          addToDoListHandle={this.addToDoListHandle}
          onChangeToDoListInput={this.onChangeToDoListInput}
          toDoListGrouping={this.state.toDoListGrouping}
          toDoListCurrentInput={this.state.toDoListCurrentInput}
          deleteToDoListEntry={this.deleteToDoListEntry}
          currentSearch={this.state.currentSearch}
          searchList={this.state.searchList}
          isSearched={this.state.isSearched}
          searched={this.state.searched}
        />
      </div>
    );
  }
}
