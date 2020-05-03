import css from "styled-jsx/css";
import palette from "../../styles/colors";

const MeterStyles = css`
  .dashboardWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
  }

  .meter {
    background: ${palette.forth};
    border: 1px solid black;
    height: 210px;
    width: 21%;
    margin: 10px;
    border-radius: 5px;
  }

  h3 {
    color: ${palette.primary};
  }

  .name {
    font-size: 25px;
    text-align: center;
    padding: 3px;
    margin: 5px;
    text-decoration: underline;
  }

  .count {
    width: 40%;
    height: 75%;
    border: 1px solid ${palette.tersory};
    border-radius: 50%;
    text-align: center;
    font-size: 50px;
    background: ${palette.primary};
    line-height: 0;
    color: ${palette.forth};
  }

  .counter {
    height: 40px;
    width: 40px;
    border-radius: 2px;
    font-size: 30px;
    margin: 10px 20px;
    border: none;
    border-bottom: 2px solid ${palette.primary};
  }

  .counter:hover {
    background: ${palette.secondry};
    color: ${palette.forth};
  }
`;

export default MeterStyles;
