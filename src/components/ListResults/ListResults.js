import React from 'react';
import './ListResults.css';

const listResults = props => {
    const {movies, getMovie} = props;
    const displayedMovies = movies.map(movie => (
        <li key={movie.id} onClick={() => getMovie(movie.id)}>{movie.title}</li>
    ))
    return (
      <div>
       {displayedMovies.length > 0 && (
         <ul className="ListResults">
            {displayedMovies}
         </ul>
       )}
      </div>
    )
}

export default listResults;
