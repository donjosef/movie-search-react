import React, { Component } from 'react';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MovieInfo from './components/MovieInfo/MovieInfo'
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
          <SearchMovie inputVal={this.state.inputVal} changeInput={this.changeInputHandler}/>
        </header>
        <MovieInfo />
      </div>
    );
  }
}

export default App;
