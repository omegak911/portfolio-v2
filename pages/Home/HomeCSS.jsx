import css from 'styled-jsx/css';

export default css
`
  .homeSubContainer {
    background-image: url("https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-138815.jpg");
    background-position-x: 50%;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .homeSubContainer span {
    color: white;
    text-shadow: 5px 5px 10px black;
  }

  .name {
    font-size: 60px;
    text-align: center;
  }

  .statement {
    font-size: 40px;
    text-align: center;
  }
`