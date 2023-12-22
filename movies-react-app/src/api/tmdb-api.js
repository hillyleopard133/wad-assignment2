export const getMovies = async (page = 1) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movies?page=${page}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getUpcoming = async (page = 1) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/upcoming?page=${page}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getTrending = async (page = 1) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/trending?page=${page}`,
    {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getTopRated = async (page = 1) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/top_rated?page=${page}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getNowPlaying  = async (page = 1) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/now_playing?page=${page}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovie  = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie?id=${id}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieCredits  = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/credits?id=${id}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieRecommendations  = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/recommendations?id=${id}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getActor  = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/actor?id=${id}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getActorCredits  = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/actor/credits?id=${id}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getGenres  = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/genres`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieImages  = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/images?id=${id}`,
     {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

  export const getMovieReviews = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/reviews?id=${id}`,
       {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };
