import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// import logo from './logo.svg';
import './App.css';
import Reddit from './reddit'
import CredentialsForm from './credentials-form'

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {data: ""}
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/main/process')
    .then(res => res.json())
    .then((json) => {
      console.log(json.data)
      this.setState({ data: [...json.data] })
    });
  }

  render() {
    const data = [...this.state.data]
    const testList = data.map((d,index) =>
      // (<p style="text-align:left" key={index}>{d.name} {d.content}</p>))
      (<p key={index}> {d.name}{d.time}: <br/>{d.content}</p>))
    console.log(testList)
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <h1>UniSocial</h1>
          <div>
              <h3>Enter your Login Information:</h3>
              <CredentialsForm />
            </div>
          <Reddit/>
            <div class="container" style={{backgroundColor:"clear"}}>
              {testList}
            </div>

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
