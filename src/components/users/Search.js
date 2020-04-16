import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState(""); //text is state name and setText is a method to change the state and these are destructured from useState

  const onChange = (event) => {
    //this.setState({ text: event.target.value });
    // this.setState({ [event.target.name]: event.target.value })
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert("please enter something", "light");
    } else {
      searchUsers(text);
      // this.setState({ text: "" });
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
