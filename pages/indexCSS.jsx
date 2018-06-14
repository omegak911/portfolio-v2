import css from 'styled-jsx/css';

const globalCSS = css
`
  body {
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
  }

  .transition {
    opacity: 0;
    transition: all 900ms ease-in-out;
    visibility: hidden;
  }

  .transition.visible {
    opacity: 1;
    visibility: visible;
  }
`

const indexCSS = css
`
  .topContainer {
    background-color: rgba(225, 243, 243, 0.63);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export { indexCSS, globalCSS };