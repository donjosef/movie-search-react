import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

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
         <CSSTransition
              in={displayedMovies.length > 0}
              timeout={500}
              mountOnEnter
              unmountOnExit
              classNames='translateY'>
           <ul className="ListResults" style={dynamicHeight}>
              {displayedMovies}
           </ul>
         </CSSTransition>
      </div>
    )

}

export default listResults;
