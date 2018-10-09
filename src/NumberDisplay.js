import React, { Fragment } from 'react';
import styled from 'styled-components';
import { fill } from 'lodash';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`

const NumberDisplay = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    padding: 1rem;
    height: 4rem;
    width: 4rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;

    flex-shrink: 1;
    flex-grow: 0;

    border-radius: 50%;
    font-size: 2rem;

    margin-bottom: 0.5rem;
    background-color: white;
`

const emptyValues = fill(Array(6), '-');

export default ({numbers, generateNumber}) => {
    const displayValues = numbers.length ? numbers : emptyValues;
    return <Container>
        {displayValues.map( (n,i) => <NumberDisplay key={i}>{n}</NumberDisplay> )}
    </Container>
}