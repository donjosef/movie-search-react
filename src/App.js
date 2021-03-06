import React, { Component } from 'react';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MovieInfo from './components/MovieInfo/MovieInfo';
import ListResults from './components/ListResults/ListResults';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import logo from './images/moviedb.png';
import axios from 'axios';
import './App.css';

function isEmpty(obj) {
  for(let key in obj) {
    if(key in obj) {
      return false;
    }
  }
  return true;
}

class App extends Component {

  state = {
    inputVal: '',
    movies: [],
    selectedMovie: {},
    isMovieSelected: false,
  }

  componentDidMount() {
      axios.get(
        `https://api.themoviedb.org/3/movie/27205?api_key=4f133e8a6ccd4f69d95e2ec10b7b0918&append_to_response=videos`
      ).then(res => {
        const selectedMovie = res.data; //default movie when app mount
        this.setState({ selectedMovie });

      })
  }

  changeInputHandler = (e) => {
    this.setState({
      inputVal: e.target.value,
      isMovieSelected: false //Once user select a movie, isMovieSelected will be true, and this will not make possible to make any request
     });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.inputVal !== this.state.inputVal && this.state.inputVal.length > 1 && !this.state.isMovieSelected) {
      this.getMovies(this.state.inputVal) //so if user select a movie, it doesnt make a request again
    } else if(prevState.inputVal !== this.state.inputVal && this.state.inputVal.length < prevState.inputVal.length) {
      this.setState({ movies: [] }) //when deleting the search query under or equal to 1 charachter
    }
  }

  getMovies = (query) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4f133e8a6ccd4f69d95e2ec10b7b0918&query=${query}`)
    .then(res => {
      console.log('movies', res.data)
      const regx = new RegExp(query, 'i');
      const movies = res.data.results.filter(({title}) => regx.test(title))
      .sort((a,b) => b.popularity - a.popularity);
      this.setState({ movies })
    })

  }

  closeListHandler = (e) => {
    if(e.target.type !== 'search') {
      this.setState({ movies: [] })
    }
  }

  getMovieHandler = (selectedId, selectedTitle) => {

    axios.get(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=4f133e8a6ccd4f69d95e2ec10b7b0918&&language=en-US&append_to_response=videos`)
    .then(res => {
      const selectedMovie = res.data;
      this.setState({
        selectedMovie,
        isMovieSelected: true, //so if user select a movie, it doesnt make any getMovies request
        inputVal: selectedTitle
      });
    })
  }

  render() {
    const backgroundUrl = `https://image.tmdb.org/t/p/original/${this.state.selectedMovie.backdrop_path}`;
    let backGroundStyle = {
      backgroundColor: 'black',
      minHeight: '100vh'
    };
    if(this.state.selectedMovie.backdrop_path) {
       backGroundStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.2) 40%), url(${backgroundUrl})`,
        backgroundSize: 'cover'
      };
    }

    return (
      <div style={backGroundStyle} className="App" onClick={(e) => this.closeListHandler(e)}>
        <div className="Layout">
            <header className="Header">
              <div className="Logo">
                <img src={logo} alt='Moviedb logo'/>
              </div>
              <div className="SearchMovieContainer">
                <SearchMovie inputVal={this.state.inputVal} changeInput={this.changeInputHandler}/>
                <ListResults movies={this.state.movies} getMovie={this.getMovieHandler}/>
              </div>
            </header>
            {isEmpty(this.state.selectedMovie) ? <Loader /> : (
              <MovieInfo info={this.state.selectedMovie} />
            )}
            <Modal
                selectedMovie={this.state.selectedMovie}
                title={this.state.selectedMovie.title}/>
        </div>
        <footer className="Footer">
          <p>
            Design inspired by <a href='http://www.stephenkempin.co.uk/' >Stephen Kempin</a>
          </p>
          <p>Developed by Giuseppe Montanaro.</p>
          <p><a href="https://github.com/donjosef/movie-search-react">View Code</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
