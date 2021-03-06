import css from 'styled-jsx/css'

export default css 
`
  .navMain {
    background: linear-gradient(to bottom, rgba(19,19,19,1) 0%,rgba(17,17,17,1) 14%,rgba(17,17,17,1) 14%,rgba(0,0,0,1) 75%,rgba(89,89,89,1) 98%,rgba(76,76,76,1) 100%);
    display: flex;
    height: 50px;
    position: fixed;
    width: 100%;
    z-index: 99999;
  }

  .navMain a {
    align-items: center;
    color: rgb(235, 235, 235);
    display: flex;
    font-size: 18px;
    font-weight: bold;
    height: 100%;
    justify-content: center;
    min-height: 20px;
    min-width: 50px;
    text-decoration: none;
    width: 20%;
  }

  .techText {
    text-decoration: none;
  }
`