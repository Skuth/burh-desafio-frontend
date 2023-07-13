import { styled } from "styled-components";

export const ModalStyles = styled.div`
    width: 500px;
    height: 680px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: absolute;
    display: ${props => props.modal === "close" ? "none" : "flex"};

    border-radius: 15px;
    background-color: var(--color-blue);

    color: var(--color-white-fixed);

    h1 {
        margin: 0 auto;

        font-size: 18px;
        font-weight: 600;
        color: var(--color-white-fixed);
    }

    button {
        border: 1px solid var(--color-white-fixed);
    }

    .modal-button__close {
        position: absolute;
        top: 15px;
        right: 15px;

        background-color: transparent;
        border: none;
        cursor: pointer;

        font-size: 18px;
        font-weight: 600;
        color: var(--color-white-fixed);
    }
`