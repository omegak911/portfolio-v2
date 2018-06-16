import css from 'styled-jsx/css';

export default css 
`
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
    height: 100%;
  }

  .innerAppContainer {
    height: 90%;
    border: 1px solid black;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
    position: relative;
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

  .modal {
    align-items: center;
    background-color: rgba(181, 181, 181, 0.5);
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 400;
  }

  .modalInfo {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: center;
    width: 80%;
  }

  .modalInfo a {
    color: rgb(66, 158, 250);
  }
`