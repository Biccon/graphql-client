import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";
const Detail = ({ match }) => {
  const { movieId } = match.params;
  return (
    <Query query={MOVIE_DETAILS} variables={{ movieId }}>
      {({ loading, error, data }) => {
        if (loading) return "loading";
        if (error) return "error";
        console.log(data);
        return (
          <>
            <img src={data.movie.medium_cover_image} />
            {data.movie.title}
            <ul> 
                <li>Suggestions</li>
              {data.suggestions.map(movie => (
                <li key={movie.title}>
                  {movie.title} / {movie.rating}
                </li>
              ))}
            </ul>
          </>
        );
      }}
    </Query>
  );
};

export default Detail;

//https://www.youtube.com/watch?v=xtcw9YAgVJM&index=6&list=PL7jH19IHhOLOVNxdXbPqcOweev3NuI527
// #6 4:58
