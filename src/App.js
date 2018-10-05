import React, { Component } from 'react';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MovieInfo from './components/MovieInfo/MovieInfo';
import ListResults from './components/ListResults/ListResults';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    inputVal: '',
    movies: []
  }

  changeInputHandler = (e) => {
    this.setState({ inputVal: e.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.inputVal !== this.state.inputVal && this.state.inputVal.length > 1) {
      this.getMovies(this.state.inputVal)
    }
  }

  getMovies = (query) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4f133e8a6ccd4f69d95e2ec10b7b0918&query=${query}`)
    .then(res => {
      const regx = new RegExp(query, 'i');
      const movies = res.data.results.filter(({title}) => regx.test(title))
      .sort((a, b) => a.title > b.title ? 1 : -1 );
      this.setState({ movies })
    })

  }


  render() {
    return (
      <div className="App">
        <div className="Layout">
            <header className="Header">
              <div className="Logo">
                Img
              </div>
              <div className="SearchMovieContainer">
                <SearchMovie inputVal={this.state.inputVal} changeInput={this.changeInputHandler}/>
                <ListResults movies={this.state.movies}/>
              </div>
            </header>
            <MovieInfo />
        </div>
      </div>
    );
  }
}

export default App;
