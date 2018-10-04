import React from 'react';
import './SearchMovie.css';

const searchMovie = props => {

      return (
          <input
            className="SearchInput"
            type="search"
            placeholder="Search Movie"
            value={props.inputVal}
            onChange={(e) => props.changeInput(e)} />
      )
}

export default searchMovie;
