import css from "styled-jsx/css";

const LandingStyles = css`
  .landingContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  button {
    height: 50px;
    width: 200px;
    padding: 10px;
    font-size: 20px;
    border-radius: 2px;
    margin: 5px;
  }

  .heading {
    border-bottom: 1px solid black;
    width: 100%;
    text-align: center;
    padding: 20px;
  }

  .optionContainer {
    margin-top: 8%;
    width: 40%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default LandingStyles;
