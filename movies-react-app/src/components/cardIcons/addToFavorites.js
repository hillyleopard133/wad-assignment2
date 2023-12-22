import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext } from "../../contexts/authContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites2(authContext.userName, movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;