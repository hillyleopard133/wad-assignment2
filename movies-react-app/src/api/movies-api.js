
export const getMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };


export const addFavourite = async(username, movieId) => {
    const res = await fetch(
        `http://localhost:8080/api/favourites`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, movieId: movieId })
        }
    )
        return res.json();
};
  
  
  export const login = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };
  
  export const signup = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users?action=register', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };