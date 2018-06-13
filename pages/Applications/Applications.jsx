import React, { Component } from 'react';

import './Applications.css';

const redidit = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7%2Ft8PyKhFJmmc360e9k3D7AlwGs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjucZTZeeCl9UARcH0DjQAwKr61ETPnQY6-KIO7etkkgpPndZH5agYUbhl4lWdI';
const rhymeDoctor = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IPlKHIIm9lFrnbt8npUC243t14s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfsCLerbzrUBHcS8HjQAxKum1SGG3E464KojnKN0j2Ze3JMT5agYUbhl4lWdI';
const trackYoScore = 'https://thumbs.dreamstime.com/b/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg';

class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: [
        {
          title: 'Rhyme Doctor',
          image: rhymeDoctor,
          description: 'Rhyme visualization tool',
        },
        {
          title: 'Redidit',
          image: redidit,
          description: 'Clone of Reddit',
        },
        {
          title: 'TrackYoScore',
          image: trackYoScore,
          description: 'Game score tracking system',
        },
      ]
    }
  }

  render() {
    const { applications } = this.state;

    return (
      <div id="applications" className="topContainer">
        <div className="midAppContainer">
          <div>
            <h2>Applications</h2>
            <div className="allAppContainer">
              {applications.map((app, index) =>
                <div key={index} className="appContainer">
                  <div className="innerAppContainer">
                    <img src={app.image} alt="app image"/>
                    <div>{app.title}</div>
                    <div>{app.description}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Applications;