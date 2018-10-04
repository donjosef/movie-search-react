import React from 'react';

const searchMovie = props => {

      return (
        <div>
          <input
            type="search"
            placeholder="Search Movie"
            value={props.inputVal}
            onChange={(e) => props.changeInput(e)} />
        </div>
      )
}

export default searchMovie;
