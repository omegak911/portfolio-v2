import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navMain">
        <a href="#home">Home</a>
        <a href="#applications">Applications</a>
        <a href="#tech">Tech</a>
        {/* <a href="#blog">Blog</a> */}
        <a href="mailto:xkinchanx@gmail.com">Contact</a>
      </div>
    )
  }
}

export default Navbar;