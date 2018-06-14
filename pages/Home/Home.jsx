import React, { Component } from 'react';

import homeCSS from './HomeCSS';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homeSubContainer">
        <span className="name">Kin Chan</span>
          <br/>
        <span className="statement"><em>The software engineer you've been searching for</em></span>
        <style jsx>{homeCSS}</style>
      </div>
    )
  }
}

export default Home;