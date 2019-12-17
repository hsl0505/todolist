import React from "react";

const SearchPage = props => {
  const searched = props.currentSearch ? props.currentSearch : props.searched;
  const arr = props.searchList;
  const mapArr = arr.map(entry => (
    <div key={entry.toDoListId}>
      <div>{entry.toDoListValue}</div>
      <div>{`location : ${entry.group}`}</div>
    </div>
  ));
  return (
    <div>
      <div>{`${searched} 에 대한 검색 결과`}</div>
      <div>{mapArr}</div>
    </div>
  );
};

export default SearchPage;
