import styled from 'styled-components'
import { Form, ErrorMessage, Field } from "formik";


export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
`;

export const StyledError = styled(ErrorMessage)`
    color: red;
`;

export const Button = styled.button`
    margin-top: 30px;
    max-width: 120px;
    padding: 10px;
    border-radius: 5px;
    font-size:18px;
    cursor: pointer;
    &:hover{
        background-color: greenyellow 
    }
`;

export const Label = styled.label`
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-size: 18px
`;

export const Input = styled(Field)`
    padding: 10px;
    border-radius: 5px;
    max-width: 300px;
`;