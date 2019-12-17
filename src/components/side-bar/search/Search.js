import React from "react";
import searchimg from "../../../searchicon.png";

const Search = props => {
  return (
    <div className="side-bar_search-box">
      <img
        className="search-box_icon"
        src={searchimg}
        alt="없음"
        onClick={props.searchClickHandle}
      />
      <input
        className="search_box_search-input"
        onChange={props.searchChangeHandle}
        placeholder={"할 일 검색"}
        value={props.currentSearch}
      />
    </div>
  );
};

export default Search;

// class Search extends Component {
//   render() {
//     return <div>- 여기는 서치</div>;
//   }
// }
