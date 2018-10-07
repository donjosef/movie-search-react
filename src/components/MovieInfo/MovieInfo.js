import React from 'react';
import './MovieInfo.css';

const movieInfo = props => {
    const {info} = props;
    let imageUrl = null;
    if('poster_path' in info) {
      imageUrl = `https://image.tmdb.org/t/p/w500/${info.poster_path}`;
    }

    let genres;
    if(info.genres) {
       genres = info.genres.map(genre => genre.name).join(",");
    }

    return (
      <article className="MovieInfo">
        <section className="Poster">
           <img alt="movie poster" src={imageUrl}/>
        </section>
        <section className="Details">
           <h1>{info.title}</h1>
           <h3>{info.tagline}</h3>
           <p>{info.overview}</p>
           <h4>{genres}</h4>
           <div className="SubDetails">
             <div>
                <p>Released Date</p>
                <strong>{info.release_date}</strong>
             </div>
             <div>
                <p>Duration</p>
                <strong>{info.runtime ? `${info.runtime} min` : null}</strong>
             </div>
             <div>
                <p>Box Office</p>
                <strong>{info.revenue ? `$ ${Number(info.revenue).toLocaleString()}` : null}</strong>
             </div>
             <div>
                <p>Vote Average</p>
                <strong>{info.vote_average}</strong>
             </div>
           </div>
           {props.trailerAvailable && (
              <button className='BtnTrailer' onClick={props.showModal}>View Trailer</button>
           )}
        </section>
      </article>
    )
}

export default movieInfo;
