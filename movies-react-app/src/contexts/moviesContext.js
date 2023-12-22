import React, { useState, useEffect, useContext } from "react";
import { useQuery } from 'react-query';
import {addFavourite } from "../api/movies-api";
import { getFavourites} from "../api/movies-api";
import { AuthContext } from "../contexts/authContext";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const authContext = useContext(AuthContext);
  const [favorites, setFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  useEffect(() => {
    getFavourites(authContext.userName).then((favorites) => {
      setFavorites(favorites);
    });
  });

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addToFavorites2 = async (username, movie) => {
    const result = await addFavourite(username, movie.id);
    addToFavorites(movie);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }
    else{
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist)
  };
  
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromPlaylist = (movie) => {
    setPlaylist( playlist.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        playlist,
        addToFavorites,
        addToPlaylist,
        removeFromFavorites,
        removeFromPlaylist,
        addReview,
        addToFavorites2,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;