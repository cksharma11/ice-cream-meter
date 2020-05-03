import css from "styled-jsx/css";
import palette from "../../styles/colors";

const HeaderStyles = css`
  .heading {
    ${'' /* border-bottom: 1px solid ${palette.secondry}; */}
    width: 100%;
    text-align: center;
    padding: 25px;
    color: ${palette.primary};
    font-weight: bold;
  }
`;

export default HeaderStyles;
