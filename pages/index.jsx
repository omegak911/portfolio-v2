import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

// import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar';
import Applications from './Applications/Applications';
import Tech from './Tech/Tech';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showApp: false,
      showTech: false,
    }
  }

  componentWillMount() {
    setDefaultProps({
      percent: 20,
      onChange: (visible) => {
        if (!this.state.showApp) {
          this.setState({ showApp: true });
        } else {
          this.setState({ showTech: true });
        }
      }
    })
  }

  render() {
    let { showTech } = this.state;

    return (
      <div>
        <Navbar />
        <Home />
        <OnVisible className="transition">
          <Applications />
        </OnVisible>
        <OnVisible className="transition">
          <div id="tech" className="topContainer">
            {showTech && <Tech />}
          </div>
        </OnVisible>
        {/* <OnVisible className="transition">
          <Blog />
        </OnVisible> */}
        <OnVisible className="transition">
          <Contact />
        </OnVisible>
      </div>
    )
  }
}

export default App;