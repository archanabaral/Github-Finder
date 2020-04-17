import React from "react";
import RepoItem from "./RepoItem";

//destructuring props and pulling out the repos ({repos})
const Repos = ({repos}) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};
export default Repos;
