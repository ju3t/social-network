import styled from 'styled-components';

export const InputName = styled.input`
    margin-left: 0;
    margin-top: 32px;
    margin-bottom: 20px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #B3B3B3;
    outline: none !important;
    font-size: 24px;
`;

export const InputText = styled.textarea`
    margin-left: 0;
    margin-top: 42px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #B2B2B2;
    outline: none !important;
    font-size: 24px;
    resize: none;
`;

export const ArticleStyledForm = styled.form`
    display: flex;
    flex-direction: column;
    position: relative;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    height: ${({ isOpen }) => (isOpen ? '100%' : '0px')};
    transition: 1s;
`;

export const ArticleButton = styled.button`
    width: 331px;
    height: 67px;
    margin-top: 100px;
    background: #FFB11B;
    border-radius: 15px;
    border: none;
    font-family: Montserrat,serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.065em;
    color: #000000;

    &:hover {
    cursor: pointer;
    }
`;
