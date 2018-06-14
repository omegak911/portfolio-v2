import React, { Component } from 'react';

import navbarCSS from './NavbarCSS';

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
        <style jsx>{navbarCSS}</style>
      </div>
    )
  }
}

export default Navbar;