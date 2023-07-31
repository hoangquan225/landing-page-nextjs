"use client"
import { css, styled } from "styled-components";

export const Wide = styled.div`
    margin: 0 auto;
    height: 100%;
    max-width: 96%;

    @media (min-width: 768px) { max-width: 96%; }
    @media (min-width: 992px) { max-width: 90%; }
    @media (min-width: 1024px) { max-width: 960px; }
` 