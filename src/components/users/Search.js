import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githibContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

  const [text, setText] = useState(""); //text is state name and setText is a method to change the state and these are destructured from useState

  const onChange = (event) => {
    //this.setState({ text: event.target.value });
    // this.setState({ [event.target.name]: event.target.value })
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      showAlert("please enter something", "light");
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
