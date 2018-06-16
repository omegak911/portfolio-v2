import React, { Component } from 'react';

const redidit = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7%2Ft8PyKhFJmmc360e9k3D7AlwGs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjucZTZeeCl9UARcH0DjQAwKr61ETPnQY6-KIO7etkkgpPndZH5agYUbhl4lWdI';
const rhymeDoctor = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IPlKHIIm9lFrnbt8npUC243t14s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfsCLerbzrUBHcS8HjQAxKum1SGG3E464KojnKN0j2Ze3JMT5agYUbhl4lWdI';
// const trackYoScore = 'https://thumbs.dreamstime.com/b/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg';
const portfolio = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=k9tS0%2FpGWit6YI7LG%2FsrdzsNO08%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrfs_eKLel8UAVLnhXjQAzfO61STXhE460eIjre9V2iJHjd5P5agYUbhl4lWdI';

import appCSS from './AppCSS';

class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: [
        {
          code: 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile',
          description: 'Rhyme visualization tool',
          image: rhymeDoctor,
          title: 'Rhyme Doctor',
          url: 'https://rhymedoctor.fun/',
          special: [
            ['Android Link', 'https://play.google.com/store/apps/details?id=com.notoriousnpm.rhymedoctor'],
            ['Android Codebase', 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile']
          ]
        },
        {
          code: 'https://github.com/aask4/redidit',
          description: 'Clone of Reddit',
          image: redidit,
          title: 'Redidit',
          url: 'https://aask4-redidit.herokuapp.com',
        },
        {
          code: 'https://github.com/omegak911/omegak911.github.io/tree/portfolio',
          description: 'Personal Portfolio',
          image: portfolio,
          title: 'Portfolio',
          url: 'https://omegak911.github.io/',
          special: [
            ['Heroku Website', 'https://personalportfolio-v2.herokuapp.com/'],
            ['Next.js Codebase', 'https://github.com/omegak911/portfolio-v2/tree/deployment']
          ]
        }
        // {
        //   title: 'TrackYoScore',
        //   image: trackYoScore,
        //   description: 'Game score tracking system',
        // },
      ],
      showModal: null,
    }
  }

  displayModal = (index) => {
    this.setState({ showModal: index})
  }

  removeModal = () => {
    this.setState({ showModal: null})
  }

  render() {
    const { applications, showModal } = this.state;

return (
      <div id="applications" className="topContainer">
        <div className="midAppContainer">
          <div>
            <h2>Deployed Applications</h2>
            <div className="allAppContainer">
              {applications.map((app, index) =>
                <div key={index} className="appContainer">
                  <div 
                    className="innerAppContainer" 
                    onMouseEnter={() => this.displayModal(index)} 
                    onMouseLeave={this.removeModal}
                    >
                    {showModal === index && 
                      <div className="modal">
                        <div className="modalInfo">
                          <div><h3>{app.title}</h3></div>
                          <div><a href={app.url} target="_blank">Website</a></div>
                          <div><a href={app.code} target="_blank">Codebase</a></div>
                          {app.special &&
                            <div>
                              <br/>
                              <div><a href={app.special[0][1]} target="_blank">{app.special[0][0]}</a></div>
                              <div><a href={app.special[1][1]} target="_blank">{app.special[1][0]}</a></div>
                            </div>
                          }
                        </div>
                      </div>
                    }
                    <img src={app.image} alt="app preview"/>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <style jsx>{appCSS}</style>
      </div>
    )
  }
}

export default Applications;