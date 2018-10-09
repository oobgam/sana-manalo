import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiX } from 'react-icons/fi';
import { IconButton } from './Buttons';

const ModalContainer = styled.div`
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Modal = styled.div`
    background-color: white;
    border-radius: 0.25rem;
    width: 100%;
    min-height: 50vh;
    max-height: 80vh;
    position: relative;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;

    button {
        position: absolute;
        top: 1rem;
        right: 0.5rem;
    }
`

const ModalHeader = styled.div`
    padding: 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    font-weight: bold;
`

const ModalBody = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;
    overflow: scroll;
    height: 100%;

    p {
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        color: ${p => p.theme.bodyColor};
        border: 2px solid ${p => p.theme.bodyColor};
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        flex-shrink: 0;
        svg {
            margin-right: 0.25rem;
        }
    }
`

const ModalSubHeading = styled.h3`
    text-transform: uppercase;
    font-size: 0.85rem;
`

export default ({closeModal}) => <ModalContainer onClick={closeModal}>
    <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>Bakit?</ModalHeader>
        <ModalBody>
            <p>Para sa mga taong pagod na mag-isip ng numerong itataya araw-araw.</p>
            <p>Dahil hindi mo naman pwedeng itaya ang araw ng iyong kapanganakan nang 6 na beses.</p>
            <p>One-click wonder.</p>
            <ModalSubHeading>Credits</ModalSubHeading>
            <p>PCSO Website para sa mga logo</p>
            <br />
            <a href="https://github.com/oobgam"><FiGithub /> Github</a>
        </ModalBody>
        <IconButton inverted onClick={closeModal}><FiX /></IconButton>
    </Modal>
</ModalContainer>