import css from 'styled-jsx/css';

export default css
`
  #contact {
    align-items: center;
    background-color: rgba(225, 243, 243, 0.63);
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
  }

  .contactHeader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contactType {
    background: linear-gradient(to bottom, rgba(149,149,149,1) 0%,rgba(13,13,13,1) 4%,rgba(13,13,13,1) 4%,rgba(13,13,13,1) 12%,rgba(13,13,13,1) 21%,rgba(13,13,13,1) 21%,rgba(1,1,1,1) 50%,rgba(10,10,10,1) 75%,rgba(13,13,13,1) 95%);
    border-radius: 10px;
    box-shadow: 2px 3px 3px grey;
    display: flex;
    flex-direction: column;
    height: 40px;
    justify-content: center;
    text-align: center;
    width: 200px;
  }

  .contactType a {
    color: rgb(66, 158, 250);
  }
`