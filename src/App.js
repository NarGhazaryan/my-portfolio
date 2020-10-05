import React, { Component } from 'react';
import Main from './Components/Main/Main';

import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    jobs: [
      {
        title: "Job 1",
        text: "My first job",
        images: [],
      },
      {
        title: "Job 2",
        text: "My second job",
        images: [],
      },
      {
        title: "Job 3",
        text: "My 3th job",
        images: [],
      },
    ]
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000)
  }

  render() {
    return (
      this.state.isLoading ?
        (
          <div style={{ height: "100vh", background: "rgb(79,227,195)", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          </div>
        )
        :
        (
          <div className="App">
            <Main />
          </div>
        )
    )
  }
}

export default App;