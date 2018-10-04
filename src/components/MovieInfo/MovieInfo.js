import React from 'react';
import './MovieInfo.css';

const movieInfo = props => {
    return (
      <article className="MovieInfo">
        <section className="Poster">
           <img />
        </section>
        <section className="Details">
           <h1>title</h1>
           <h3>Intro title</h3>
           <p>Plot</p>
           <h4></h4>
           <div className="SubDetails">
             <div>Info</div>
             <div>Info</div>
             <div>Info</div>
             <div>Info</div>
           </div>
        </section>
      </article>
    )
}

export default movieInfo;
