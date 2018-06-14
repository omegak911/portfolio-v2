import css from 'styled-jsx/css'

const techGlobalCSS = css
  `
    .techAnimation {
      display: flex;
      flex-wrap: wrap;
    }
  `

const techCSS = css
  `
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
      transition: transform 1s ease-in-out;
    }
  `

export { techCSS, techGlobalCSS };