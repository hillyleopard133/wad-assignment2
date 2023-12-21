import React, { useState } from "react";
import Header from "../headerActorList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ credits}) {

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title="Actors" />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList actors={credits}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;