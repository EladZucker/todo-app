import styled from "styled-components";

export const XButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin-left: 8px;
    vertical-align: top;
    display: none;
    line-height: 1;

`
export const TodoWrapper = styled.div`
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #1c1c1c;
  margin-top: 16px;
  line-height: 1.5;
  & :hover {
      ${XButton} {
          display: inline-block;
      }
  }
`;

export const TodoText = styled.span`
    margin-left: 8px;
    text-decoration: ${props => props.selected ? "line-through" : "none"};
`

