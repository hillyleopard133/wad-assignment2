import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getMovie, getMovieCredits, getMovieRecommendations } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: recs} = useQuery(
    ["recommendations", { id: id }],
    getMovieRecommendations
  );

  const { data} = useQuery(
    ["credits", { id: id }],
    getMovieCredits
  );

  const credits = data && data.cast ? data.cast : [];
  console.log("Movie Credits Data:", credits); // Log the data
  const recommendations = recs && recs.results ? recs.results : [];
  console.log("recommendations Data:", recs); // Log the data

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
 
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} credits={credits} recommendations={recommendations}/>
          </PageTemplate>
          
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;