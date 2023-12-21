import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieListUpcoming";
import Grid from "@mui/material/Grid";
import Pagination from '../pagination';

function MovieListPageTemplate({ movies, title, totalPages, currentPage, onPageChange, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [minRatingFilter, setMinRatingFilter] = useState(0);
  const [releaseYearFilter, setReleaseYearFilter] = useState(""); 

  const [sortBy, setSortBy] = useState("default"); 

  const genreId = Number(genreFilter);
  const minRating = Number(minRatingFilter);
  const releaseYear = Number(releaseYearFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return m.vote_average >= minRating;
    })
    .filter((m) => {
      return releaseYear ? new Date(m.release_date).getFullYear() === releaseYear : true;
    });

  if (sortBy === "alphabetical") {
    displayedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "releaseDate") {
    displayedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
  }

  const handleChange = (type, value) => {
    if (type === "name") {
      setNameFilter(value);
    }else if (type === "genre") {
      setGenreFilter(value);
    } else if (type === "minRating") {
      setMinRatingFilter(value);
    } else if (type === "releaseYear") {
      setReleaseYearFilter(value);
    } else if (type === "sortBy") {
      setSortBy(value);
    }
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            minRatingFilter={minRatingFilter}
            releaseYearFilter={releaseYearFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
      </Grid>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;