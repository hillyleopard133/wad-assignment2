import React, { useState, useEffect } from "react";
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid";
//import Image from "@mui/material/Image";
import img from '../../images/film-poster-placeholder.png'
import AddToFavoritesIcon from '../cardIcons/addToFavorites'
import MovieList from "../movieList";
import Header from "../headerActorList";

const TemplateActorPage = ({ movies, actor, children }) => {
  return (
    <>
      <ActorHeader actor={actor} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={5}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            
            <img
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : img}
                alt={`Profile of ${actor.name}`}
            />
            
          </div>
        </Grid>

        <Grid item xs={7}>
          {children}
        </Grid>
      </Grid>

      
      <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title="Movies" />
      </Grid>
  
      <Grid item container spacing={5}>
        <MovieList       
        movies={movies}
        action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />
        }} 
      ></MovieList>
      </Grid>
    </Grid>
    </>
  );
};

export default TemplateActorPage;