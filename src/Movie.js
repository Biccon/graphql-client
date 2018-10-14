import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, title, rating, poster }) => (
  <div className="Movie">
    <Link to={`/details/${id}`}>
      {title} / {rating}
    </Link>
  </div>
);

export default Movie;
