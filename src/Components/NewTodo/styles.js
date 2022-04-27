import styled from "styled-components";

export const TextInput = styled.input`
    border: none;
    border-bottom: 1px solid;
    font-family: Poppins;
    font-size: 16px;
    letter-spacing: 0.32px;
    width: 332px;   
    padding-bottom: 7px;
    & ::placeholder {
        color: #828282;  
    }
`;

export const Button = styled.button`
    padding: 10px 32px;
    border-radius: 6px;
    background-color: #0e1649;
    font-family: Poppins;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    text-align: center;
    color: #fff;
    border: 0;
    margin-left: 17px;
`;