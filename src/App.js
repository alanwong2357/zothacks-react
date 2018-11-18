import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// import logo from './logo.svg';
import './App.css';
import Reddit from './reddit'

// const CompononetExample = () => (<div>
//   <h2>Your Feed</h2>
// </div>)
class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {data: ""}
  }

  componentDidMount() {
    fetch('test-data.json')
    .then(res => res.json())
    .then((json) => {
      // console.log(json.data)
      this.setState({ data: [...json.data] })
    });

    // .then((res) => res.json())
    // .then((data) => {
    //   console.log('data:', data);
    // })
  }

  render() {
    const data = [...this.state.data]
    // <li style={{ backgroundColor: green; }}>
    const testList = data.map((d,index) =>
      (<li key={index}> {d.name} {d.price}</li> ))
    console.log(testList)
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <Reddit/>
          <ul>
            <div style={{backgroundColor:"blue"}}>
              {testList}
            </div>
          </ul>
          {/*
          // <CompononetExample/>
          */}

        </header>
      </div>
    );
  }

}

export default App;


//fetch - request library
//component will mount
// get mount put data
//lifecycle.mount
//lifecycle documentation
