import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor}) => {  // Don't miss this!

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Typography variant="h5" component="h3">
        Other Info
      </Typography>

      <Typography variant="h6" component="p">
        Birthday: {actor.birthday} - {actor.deathday}
      </Typography>

      <Typography variant="h6" component="p">
        Place of birth: {actor.place_of_birth}
      </Typography>

      <Typography variant="h6" component="p">
        Known for: {actor.known_for_department}
      </Typography>

      <Typography variant="h6" component="p">
        Popularity: {actor.popularity}
      </Typography>

      </>
  );
};
export default ActorDetails ;
