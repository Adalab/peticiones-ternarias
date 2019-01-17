import React, { Component } from 'react';
import TVList from './components/TVList';
import Loading from './components/Loading';
import './App.css';

const endpoint = 'http://api.tvmaze.com/search/shows?q='
class App extends Component {
  constructor(props) {
    super(props);
    
    this.field = React.createRef();
    this.state = {
      query: '',
      results: [],
      active: false
    }
    this.getTVShows = this.getTVShows.bind(this);
  }

  getTVShows() {
    const query = this.field.current.value;
    fetch(endpoint + query)
      .then(res=>res.json())
      .then(tv=> {
        this.setState({
          results: tv,
          query: query,
          active: true
        });
      })
  }

  render() {

    let loquesea;

    if (this.state.active === true && this.state.results.length < 1 && this.state.query === '') {
      loquesea = <Loading />;
    } else if (this.state.active === true && this.state.results.length < 1 && this.state.query !== '') {
      loquesea = <p>Criatura, mal todo</p>;
    } else if (this.state.active === true && this.state.results.length > 1) {
      loquesea = <TVList results={this.state.results} />;
    }

    return (
      <div className="app">

        <div className="search">
          <input type="text" ref={this.field}/>
          <button onClick={this.getTVShows}>Search</button>
        </div>

      {loquesea}        
        
        
        
      </div>
    );
  }
}

export default App;
