import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: ${p => p.theme.body};
    padding: 0.25rem;
    font-size: 1rem;
`

export const Button = styled(BaseButton)`
    background-color: ${p => p.primary
        ? p.theme.primaryColor
        : p.theme.bodyColor
    };
    border-radius: 4px;
    color: white;
`