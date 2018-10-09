import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
    background-color: transparent;
    border: 0;
    color: ${p => p.theme.bodyColor};
    font-size: 1rem;
`

export const IconButton = styled(BaseButton)`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
`