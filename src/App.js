import React, { Component } from 'react';
import TVList from './components/TVList';
import Loading from './components/Loading';
import './App.css';

const endpoint = 'http://api.tvmaze.com/search/shows?q='
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: '',
      results: []
    }
    this.handleTVName = this.handleTVName.bind(this);
    this.getTVShows = this.getTVShows.bind(this);
  }

  handleTVName(e) {
    const name = e.currentTarget.value;
    this.setState({
      query: name
    });
  }

  getTVShows() {

    fetch(endpoint + this.state.query)
      .then(res=>res.json())
      .then(tv=> {
        this.setState({
          results: tv
        });
      })
  }

  render() {

    return (
      <div className="app">

        <div className="search">
          <input type="text" onKeyUp={this.handleTVName}/>
          <button onClick={this.getTVShows}>Search</button>
        </div>

        {(this.state.results.length < 1 && this) ? <Loading /> : <TVList results={this.state.results} /> }
        
        
        
      </div>
    );
  }
}

export default App;
