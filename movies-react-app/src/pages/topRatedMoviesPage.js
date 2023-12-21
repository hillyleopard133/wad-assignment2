import React, { useState }  from "react";
import { getTopRated } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TopRatedPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isError, refetch } = useQuery(
    ["top_rated", currentPage],
    getTopRated
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
      title="Top Rated Movies"
      movies={movies}
      totalPages={totalPages} currentPage = {currentPage} onPageChange={handlePageChange} 
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default TopRatedPage;