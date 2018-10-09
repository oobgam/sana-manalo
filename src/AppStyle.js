import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
    bodyColor: '#000000'
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
    }
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`