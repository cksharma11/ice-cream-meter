import css from "styled-jsx/css";

const LoginInTeamStyles = css`
  .logInTeamForm {
    height: 400px;
    width: 40%;
    border: 1px solid black;
    margin-top: 8%;
  }

  input,
  input[type="submit"] {
    height: 25px;
    width: 200px;
    border-radius: 2px;
    border: 1px solid gray;
    padding: 5px;
    margin: 5px;
    font-size: 15px;
  }

  input[type="submit"] {
    width: 210px;
    height: 30px;
  }

  .formTitle {
    padding: 10px;
  }
`;

export default LoginInTeamStyles;
