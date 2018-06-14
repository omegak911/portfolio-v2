import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';
import Head from 'next/head';

import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar';
import Applications from './Applications/Applications';
import Tech from './Tech/Tech';

import { indexCSS, globalCSS } from './indexCSS';

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
        <Head>
          <title>Kin K Chan</title>
        </Head>
        <Navbar />
        <div id="home" className="topContainer">
          <Home />
        </div>
        <OnVisible className="transition">
          <div id="applications" className="topContainer">
            <Applications />
          </div>
        </OnVisible>
        <OnVisible className="transition">
          <div id="tech" className="topContainer">
            {showTech && <Tech />}
          </div>
        </OnVisible>
        <OnVisible className="transition">
          <Contact />
        </OnVisible>
        <style jsx global>{globalCSS}</style>
        <style jsx>{indexCSS}</style>
      </div>
    )
  }
}

export default App;