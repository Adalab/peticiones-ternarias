import React, { Component } from 'react';
import TVList from './components/TVList';
import Loading from './components/Loading';
import {fetchReasons} from './services/tv';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.queryField = React.createRef();
    this.state = {
      query: '',
      results: []
    }
    this.getTVShows = this.getTVShows.bind(this);
  }

  getTVShows() {
    const query = this.queryField.current.value;
      fetchReasons(query)
      .then(tv=> {
        this.setState({
          results: tv,
          query: query
        });
      })
  }

  render() {

    return (
      <div className="app">

        <div className="search">
          <input type="text" ref={this.queryField} />
          <button onClick={this.getTVShows}>Search</button>
        </div>

        {(this.state.results.length < 1 && this) ? <Loading /> : <TVList results={this.state.results} /> }
        
        
        
      </div>
    );
  }
}

export default App;
