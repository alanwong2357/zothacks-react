import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// import logo from './logo.svg';
import './App.css';
import Reddit from './reddit'

// const CompononetExample = () => (<div>
//   <h2>Your Feed</h2>
// </div>)
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Reddit/>
          {/*
          // <CompononetExample/>
          */}
        </header>
      </div>
    );
  }

  componentDidMount() {
    fetch('test-data.json')
    .then(res => res.json())
    .then(json => this.setState({ data: json }));

    // .then((res) => res.json())
    // .then((data) => {
    //   console.log('data:', data);
    // })
  }

  // componentDidMount() {
  //   fetch('localhost://')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }


}

export default App;


//fetch - request library
//component will mount
// get mount put data
//lifecycle.mount
//lifecycle documentation
