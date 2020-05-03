import css from "styled-jsx/css";

const DashboardStyles = css`
  .meter {
    border: 1px solid black;
    height: 210px;
    width: 21%;
    margin: 10px;
    border-radius: 2px;
  }

  .dashboardWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
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
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
    font-size: 50px;
  }

  .counter {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    font-size: 30px;
    margin: 10px;
  }
`;

export default DashboardStyles;
