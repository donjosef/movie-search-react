import React from 'react';
import placeholderImage from '../../images/no-image-png-1.png';
import './MovieInfo.css';

const movieInfo = props => {
    const {info} = props;
    let imageUrl = null;
    /* info.poster_path  is undefined initially, so this check avoids to make a request to url/undefined */
    if(info.poster_path !== null && typeof info.poster_path === 'string') {
      imageUrl = `https://image.tmdb.org/t/p/w500/${info.poster_path}`;
    }

    if(info.poster_path === null) { //if the selected movie doesnt have a poster
      imageUrl = placeholderImage;
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
                <strong>{info.release_date ? info.release_date : '-'}</strong>
             </div>
             <div>
                <p>Duration</p>
                <strong>{info.runtime ? `${info.runtime} min` : '-'}</strong>
             </div>
             <div>
                <p>Box Office</p>
                <strong>{info.revenue ? `$ ${Number(info.revenue).toLocaleString()}` : '-'}</strong>
             </div>
             <div>
                <p>Vote Average</p>
                <strong>{info.vote_average ? info.vote_average : '-'}</strong>
             </div>
           </div>
        </section>
      </article>
    )
}

export default movieInfo;
