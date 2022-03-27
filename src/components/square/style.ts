import styled from "styled-components";

const SquareWrapper = styled("div")`
  height: 100px;
  width: 100px;
  display: flex;
  background: ${(props) => (props.color ? props.color : "grey")}; */

`;

const ChangeButton = styled("button")`
  background: white;
  color: black;
  margin: auto;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 80%;
  }
`;

export { SquareWrapper, ChangeButton };
