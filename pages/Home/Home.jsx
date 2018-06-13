import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home" className="topContainer">
        <span className="name">Kin Chan</span>
          <br/>
        <span className="statement"><em>The software engineer you've been searching for</em></span>
      </div>
    )
  }
}

export default Home;