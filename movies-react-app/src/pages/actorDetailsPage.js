import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import TemplateActorPage from "../components/templateActorPage";
//import useMovie from "../hooks/useMovie";
import { getActor, getActorCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const ActorPage = (props) => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  const { data } = useQuery(
    ["credits", { id: id }],
    getActorCredits
  );

  const credits = data && data.cast ? data.cast : [];
  console.log("Movie Credits Data:", credits); // Log the data

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
 
  return (
    <>
      {actor ? (
        <>
          <TemplateActorPage actor={actor} movies={credits}>
            <ActorDetails actor={actor} />
          </TemplateActorPage>
          
        </>
      ) : (
        <p>Waiting for actorDetails details</p>
      )}
    </>
  );
};

export default ActorPage;