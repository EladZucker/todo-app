import styled from "styled-components";

export const TodoWrapper = styled.div`
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #1c1c1c;
  margin-top: 16px;
`;

export const TodoText = styled.span`
    margin-left: 8px;
    text-decoration: ${props => props.selected ? "line-through" : "none"};
`

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
`
