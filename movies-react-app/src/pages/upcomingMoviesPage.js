import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPageUpcoming'
import { getUpcoming } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylist from "../components/cardIcons/addToPlaylist";

const UpcomingPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isError, refetch } = useQuery(
    ["upcoming", currentPage],
    getUpcoming
  );
  

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const movies = data.results;
  const totalPages = data.total_pages;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    refetch();
  };

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      totalPages={totalPages} currentPage = {currentPage} onPageChange={handlePageChange} 
      action={(movie) => {
        return <AddToPlaylist movie={movie} />
      }}
    />
  );
};
export default UpcomingPage;