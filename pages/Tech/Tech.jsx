import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Stars from './Stars';

import './Tech.css';

class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Storage: {
        FrontEnd: [
          { tech: 'Javascript', solid: [1,2,3,4,5], empty: [] },
          { tech: 'React', solid: [1,2,3,4,5], empty: [] },
          { tech: 'Socket.IO', solid: [1,2,3,4,5], empty: [] },
          { tech: 'HTML5', solid: [1,2,3,4,5], empty: [] },
          { tech: 'CSS3', solid: [1,2,3,4,5], empty: [] },
          { tech: 'React Router', solid: [1,2,3,4,5], empty: [] },
          { tech: 'React Redux', solid: [1,2,3,4], empty: [5] },
          { tech: 'jQuery', solid: [1,2,3,4], empty: [5] },
          { tech: 'React Native', solid: [1,2,3], empty: [4,5] },
        ],
        BackEnd: [
          { tech: 'Node.js', solid: [1,2,3,4,5], empty: [] },
          { tech: 'Express', solid: [1,2,3,4,5], empty: [] },
          { tech: 'MySQL', solid: [1,2,3,4], empty: [5] },
          { tech: 'PostgreSQL', solid: [1,2,3,4], empty: [5] },
          { tech: 'MongoDB', solid: [1,2,3,4], empty: [5] },
          { tech: 'RESTful API', solid: [1,2,3,4], empty: [5] },
          { tech: 'BCrypt', solid: [1,2,3,4], empty: [5] },
          { tech: 'Passport.js', solid: [1,2,3], empty: [4,5] },
        ],
        // Deployment: [
        //   { tech: 'AWS', solid: [1], empty: [2,3,4,5] },
        //   { tech: 'Nginx', solid: [],empty: [1,2,3,4,5] },
        // ],
        DevTools: [
          { tech: 'Git', solid: [1,2,3,4], empty: [5] },
          { tech: 'NPM', solid: [1,2,3], empty: [4,5] },
          { tech: 'Webpack', solid: [1,2,3], empty: [4,5] },
          { tech: 'Babel', solid: [1,2], empty: [3,4,5] },
          { tech: 'Yarn', solid: [1,2], empty: [3,4,5] },
        ],
      },
      FrontEnd: [],
      BackEnd: [],
      // Deployment: [],
      DevTools: [],
    }
  }

  componentDidMount() {
    const { Storage } = this.state;
    let delay = 0;
    
    for (let i = 0; i < 9; i++) {
      setTimeout(() => this.setState({ FrontEnd: [...this.state.FrontEnd, Storage.FrontEnd[i]]}), delay)
      if (i < 8) {
        setTimeout(() => this.setState({ BackEnd: [...this.state.BackEnd, Storage.BackEnd[i]]}), delay)
      }
      // if (i < 2) {
      //   setTimeout(() => this.setState({ Deployment: [...this.state.Deployment, Storage.Deployment[i]]}), delay)
      // }
      if (i < 5) {
        setTimeout(() => this.setState({ DevTools: [...this.state.DevTools, Storage.DevTools[i]]}), delay)
      }
      delay += 500;
    }
  }

  render() {
    const { FrontEnd, BackEnd, DevTools } = this.state;
    // const { Deployment } = this.state;

    return (
        <div className="midTechContainer">
          <div>
            <h2>Tech Stack</h2>
            <div className="cover">
              {Object.keys(this.state).map((techType, index) => {
                if (index > 0) {
                  return <div className="techType" key={index}>
                    <div className="techTypeTitle">
                      <h3>{techType}</h3>
                    </div>
                    <div className="techStack">
                      <ReactCSSTransitionGroup
                        className="techAnimation"
                        component='div'
                        transitionName="techAnimation"
                        transitionAppear={true}
                        transitionAppearTimeout={2000}
                        transitionEnter={true}
                        transitionEnterTimeout={2000}
                        transitionLeave={false}>
                        {this.state[techType].map((tech, index) =>
                          <div className="eachTech" key={index}>
                            <div id="octagon">
                              {tech.tech}
                              <Stars solidStars={tech.solid} emptyStars={tech.empty} />
                            </div>
                          </div>
                        )}
                      </ReactCSSTransitionGroup>
                    </div>
                  </div>
                }
              })}
            </div>
          </div>
        </div>
    )
  }

}

export default Tech;