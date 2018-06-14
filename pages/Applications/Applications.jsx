import React, { Component } from 'react';

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
      <div className="appSubContainer">
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
        <style jsx>{`
        h2 {
          margin-left: 10%;
          padding-top: 20px;
        }

        .allAppContainer {
          background-color: white;
          border: 5px solid black;
          display: flex;
          height: 50vh;
          margin-bottom: 50px;
          margin-left: auto;
          margin-right: auto;
          overflow: scroll;
          text-align: center;
          width: 80%;
        }

        .appContainer {
          display: flex;
          height: 100%;
        }

        .appContainer img {
          border-bottom: 2px solid black;
          height: 85%;
        }

        .innerAppContainer {
          height: 90%;
          border: 1px solid black;
          margin-left: 10px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .midAppContainer {
          background: linear-gradient(135deg, rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%);
          border-radius: 30px;
          box-shadow: 10px 10px 10px rgb(185, 186, 186);
          display: flex;
          flex-direction: column;
          justify-items: center;
          width: 95%;
        }

        .appSubContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        `}
        </style>
      </div>
    )
  }
}

export default Applications;