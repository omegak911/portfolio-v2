import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Stars from './Stars';

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
          { tech: 'Next.js', solid: [1,2,3], empty: [4,5] },
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
    
    for (let i = 0; i < 10; i++) {
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
                        component='div'
                        style={{'display': 'flex', 'flex-wrap': 'wrap'}}
                        transitionName="techAnimation"
                        transitionAppear={true}
                        transitionAppearTimeout={2000}
                        transitionEnter={true}
                        transitionEnterTimeout={2000}
                        transitionLeave={false}>
                        {/* <div className="techAnimation"> */}
                          {this.state[techType].map((tech, index) =>
                            <div className="eachTech" key={index}>
                              <div id="octagon">
                                {tech.tech}
                                <Stars solidStars={tech.solid} emptyStars={tech.empty} />
                              </div>
                            </div>
                          )}
                        {/* </div> */}
                      </ReactCSSTransitionGroup>
                    </div>
                  </div>
                }
              })}
            </div>
          </div>
          <style jsx>{`
          .cover {
            background: linear-gradient(135deg, rgba(235,241,246,1) 0%,rgba(171,211,238,1) 25%,rgba(137,195,235,1) 71%,rgba(137,195,235,1) 71%,rgba(171,211,238,1) 93%,rgba(171,211,238,1) 93%,rgba(213,235,251,1) 100%);
            box-shadow: 2px 2px 10px grey;
            display: flex;
            flex-wrap: wrap;
            max-width: 100vh;
            padding: 20px;
          }

          .eachTech {
            padding: 5px 0px 5px 5px;
            width: 110px;
          }

          .midTechContainer {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 90vh;
            width: 80%;
          }

          .midTechContainer h2 {
            padding-top: 0;
          }

          .techType {
            align-items: center;
            display: flex;
            padding-top: 5px;
            width: 100%;
          }

          .techTypeTitle {
            align-items: center;
            display: flex;
            justify-content: center;
            min-width: 110px;
          }

          .techType h3 {
            margin-left: 1%;
          }

          .techStack {
            background-color: #252326;
            border-radius: 10px;
            display: flex;
            flex-wrap: wrap;
            margin-right: 5px;
            width: 100%;
          }

          #octagon {
            background: red;
            border-right: 1px solid #252326;
            color: white;
            display: flex;
            flex-direction: column;
            height: 100px;
            justify-content: center;
            position: relative;
            text-align: center;
            width: 100px;
          }

          #octagon:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            border-bottom: 29px solid red;
            border-left: 29px solid red;
            border-right: 29px solid #252326;
            width: 42px;
            height: 0;
          }

          #octagon:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            border-top: 29px solid red;
            border-left: 29px solid #252326;
            border-right: 29px solid red;
            width: 42px;
            height: 0;
          }

          .techAnimation-appear {
            transform: translate(1000px);
          }
          .techAnimation-appear.techAnimation-appear-active {
            transform: translate(0%);
            transition: transform 1s ease-in-out;
          }

          .techAnimation-enter {
            transform: translate(1000px);
          }
          .techAnimation-enter.techAnimation-enter-active {
            transform: translate(0%);
            transition: transform 2s ease-in-out;
          }
          `}</style>
        </div>
    )
  }
}

export default Tech;