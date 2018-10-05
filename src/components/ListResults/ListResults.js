import React from 'react';
import './ListResults.css';

const listResults = props => {
    const {movies, getMovie} = props;
    const displayedMovies = movies.map(movie => (
        <li key={movie.id} onClick={() => getMovie(movie.id)}>{movie.title}</li>
    ));
    let dynamicHeight = null;
    if(displayedMovies.length <= 6) {
      dynamicHeight = {
        height: 'auto'
      };
    }
    return (
      <div>
       {displayedMovies.length > 0 && (
         <ul className="ListResults" style={dynamicHeight}>
            {displayedMovies}
         </ul>
       )}
      </div>
    )
}

export default listResults;
