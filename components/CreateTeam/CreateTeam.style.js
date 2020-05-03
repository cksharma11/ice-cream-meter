import css from "styled-jsx/css";

const CreateTeamStyles = css`
  .createTeamForm {
    height: 400px;
    width: 40%;
    border: 1px solid #222831db;
    margin-top: 8%;
    border-radius: 5px;
    background: #222831db;
  }

  input,
  input[type="submit"] {
    height: 30px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #30475e;
    padding: 10px;
    margin: 5px;
    font-size: 15px;
    color: #222831;
  }

  input[type="submit"] {
    width: 210px;
    height: 40px;
    background: #30475e;
    color: #ececec;
  }

  .formTitle {
    padding: 10px;
  }

  .errorMessage {
    font-size: 12px;
    color: red;
  }
`;

export default CreateTeamStyles;
