import styled from 'styled-components';
import { Form } from 'formik';

export const StatusInput = styled.input`
    margin-left: 0;
    margin-top: 32px;
    margin-bottom: 20px;
    width: 1024px;
    border: none;
    outline: none !important;
    font-family: Montserrat, serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #515151;
`;

export const StatusForm = styled(Form)`
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ArticleButton = styled.button`
    width: 331px;
    height: 67px;
    margin-top: 100px;
    background: #FFB11B;
    border-radius: 15px;
    border: none;
`;
