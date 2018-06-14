import React, { Component } from 'react';

// import './Home.css';

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
        <style jsx>{`
        .homeSubContainer {
          background-image: url("https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-138815.jpg");
          background-position-x: 50%;
          background-size: cover;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .homeSubContainer span {
          color: white;
          text-shadow: 5px 5px 10px black;
        }

        .name {
          font-size: 60px;
          text-align: center;
        }

        .statement {
          font-size: 40px;
          text-align: center;
        }
        `}
        </style>
      </div>
    )
  }
}

export default Home;