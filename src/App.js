import React, { Component } from 'react';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MovieInfo from './components/MovieInfo/MovieInfo';
import ListResults from './components/ListResults/ListResults';
import './App.css';

class App extends Component {

  state = {
    inputVal: ''
  }

  changeInputHandler = (e) => {
    this.setState({ inputVal: e.target.value });
  }


  render() {
    return (
      <div className="App">
        <header>
          Logo
          <div className="MovieSearchContainer">
            <SearchMovie inputVal={this.state.inputVal} changeInput={this.changeInputHandler}/>
            <ListResults />
          </div>
        </header>
        <MovieInfo />
      </div>
    );
  }
}

export default App;
