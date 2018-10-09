import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
    bodyColor: '#4a4a4a'
}

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 100%;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        font-family: Verdana, 'sans-serif';
        color: ${p => p.theme.bodyColor};
        ${p => p.showModal ? `
            height: 100vh;
            overflow: hidden;
            ` : ''}
    }

    p {
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        -webkit-margin-start: 0;
        -webkit-margin-end: 0;
    }
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    background-color: #f2f2f2;
    min-height: calc(100vh - 32px);
`

export const Header = styled.header`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background-color: ${p => p.theme.bodyColor};
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`