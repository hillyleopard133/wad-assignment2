import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import ActorListPageTemplate from '../templateActorListPage';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MovieList from "../movieList";
import AddToFavoritesIcon from '../cardIcons/addToFavorites'
import Grid from "@mui/material/Grid";
import Header from "../headerActorList";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie, credits, recommendations }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <>
      <Typography variant="h5" component="h3" sx={{ textAlign: "center" }}>
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Recommended Movies" />
        <Tab label="Actors" />
      </Tabs>

      {activeTab === 0 && (
        <div>          
        <Grid container sx={{ padding: '20px' }}>
          <Grid item xs={12}>
            <Header title="Recommended Movies" />
          </Grid>
  
          <Grid item container spacing={5}>
            <MovieList       
              movies={recommendations}
              action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />
              }} 
            ></MovieList>
          </Grid>
        </Grid>
        </div>
      )}

      {activeTab === 1 && (
        <div>
          <ActorListPageTemplate credits={credits} />
        </div>
      )}
    </div>
      
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;
