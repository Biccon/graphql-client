import React from "react";
import { Query } from "react-apollo";
import { DETAIL } from "./queries";
const Detail = ({ match }) => {
  console.log(match);
  return <div>Detail{match.params.movieId}</div>;
};

export default Detail;

//https://www.youtube.com/watch?v=xtcw9YAgVJM&index=6&list=PL7jH19IHhOLOVNxdXbPqcOweev3NuI527
// #6 4:58 