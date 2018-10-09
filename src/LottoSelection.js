import React, { Fragment } from 'react';
import styled from 'styled-components';
import grandLottoImg from './images/GRAND_LOTTO.png';
import lottoImg from './images/LOTTO.png';
import megaLottoImg from './images/MEGA_LOTTO.png';
import superLottoImg from './images/SUPER_LOTTO.png';
import ultraLottoImg from './images/ULTRA_LOTTO.png';

import {
    ULTRA_LOTTO,
    GRAND_LOTTO,
    SUPER_LOTTO,
    MEGA_LOTTO,
    LOTTO,
} from './getLottoType';

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5rem;
`;

const ImageContainer = styled.div`
    border-radius: 4px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
    height: 4rem;
    width: 100%;
    background-size: 90%;
    background-image: url(${p => p.img});
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
    background-color: white;
`;

const LottoSelectionContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
    flex-grow: 0;
    width: 20%;
    min-width: 5rem;

    opacity: ${p => p.isChecked ? '1' : '0.4'};

    input {
        display: none;
    }
`;

export const LottoSelection = ({ value, onChange, name, selectedValue, onClick }) => (
    <LottoSelectionContainer
        htmlFor={`${name}-${value}`}
        isChecked={value === selectedValue}>
        <input
            name={name}
            id={`${name}-${value}`}
            type="radio"
            onClick={value === selectedValue ? onClick : null}
            onChange={onChange}
            value={value}
        />
        {value === ULTRA_LOTTO && (
            <Fragment>
                <ImageContainer img={ultraLottoImg} title="Ultra Lotto" />
                <p>Ultra Lotto</p>
            </Fragment>
        )}
        {value === GRAND_LOTTO && (
            <Fragment>
                <ImageContainer img={grandLottoImg} title="Grand Lotto" />
                <p>Grand Lotto</p>
            </Fragment>
        )}
        {value === SUPER_LOTTO && (
            <Fragment>
                <ImageContainer img={superLottoImg} title="Super Lotto" />
                <p>Super Lotto</p>
            </Fragment>
        )}
        {value === MEGA_LOTTO && (
            <Fragment>
                <ImageContainer img={megaLottoImg} title="Mega Lotto" />
                <p>Mega Lotto</p>
            </Fragment>
        )}
        {value === LOTTO && (
            <Fragment>
                <ImageContainer img={lottoImg} title="Lotto" />
                <p>Lotto</p>
            </Fragment>
        )}
    </LottoSelectionContainer>
);

export default ({ values, ...others }) => (
    <Container>
        {values.map((type, i) => (
            <LottoSelection
                key={i}
                value={type}
                {...others}
            />
        ))}
    </Container>
);
