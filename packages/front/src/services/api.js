const apiUrl = 'http://localhost:3000';

export const _addMovie = async (movie, OMDb) => {
  let movieDB;
  if (OMDb) {
    const result = await fetch(`http://www.omdbapi.com/?t=${movie.title}&apikey=578d2868`, {
      method: "GET",
    })
    movieDB = await result.json()
  }
  try {
    const result = await fetch(`${apiUrl}/movie/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify ({
        title: movie.title.toLowerCase(),
        year: movie.year,
        description: movie.description,
        score: movie.score,
        poster: OMDb ? movieDB.Poster : movie.poster,
      })
    })
    return result;
  } catch (e) {
    console.warn(e);
  }
};

export const _getMovies = async () => {
  try {
    const result = await fetch(`${apiUrl}/movie/`, {
      method: "GET",
    })
    return result.json();
  } catch (e) {
    console.warn(e);
  }
};

export const _editMovie = async movie => {
  try {
    const result = await fetch(`${apiUrl}/movie/${movie._id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify ({
        title: movie.title,
        year: movie.year,
        description: movie.description,
        score: movie.score,
        poster: movie.poster,
      })
    })
    return result;
  } catch (e) {
    console.warn(e);
  }
};

export const _deleteMovie = async id => {
  try {
    const result = await fetch(`${apiUrl}/movie/${id}` , {
      method: "DELETE",
    })
    return result;
  } catch (e) {
    console.warn(e);
  }
};
