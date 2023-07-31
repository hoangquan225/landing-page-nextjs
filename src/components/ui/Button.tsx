"use client"
import { css, styled } from "styled-components";

const ButtonStart = ({ text }: {
    text: String
}) => {
    return (<Button>{text}</Button>);
}

export default ButtonStart;

export const Button = styled.button<{ $primary?: boolean; }>`
    color: var(--primary-purple, #722ED1);
    border: 0.1rem solid var(--primary-purple, #722ED1);
    background: var(--white, #FFF);
    transition: all 300ms ease;

    max-width: 142px;
    max-height: 3.8rem;
    border-radius: 2.3rem;

    padding: 1.2rem 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;

    ${props => props.$primary && css`
        background: var(--primary-purple, #722ED1);
        color: #FFF;
    `}

    &:hover {
        transform: translateY(-4px);
    }
` 