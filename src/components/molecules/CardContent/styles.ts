import styled from "styled-components";

type CardContentProps = {
    color?: string
    noBorder?: boolean
}

export const Container = styled.div<CardContentProps>`
    width: 40%;
    background-color: ${(props) => props.color ? props.color : '#fff'};
    border-radius: ${(props) => props.noBorder ? '0' : '24px'};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 10px;
    padding: 0;

    @media (max-width: 1366px) {
        width: 50%;
    }

    @media (max-width: 1200px) {
        width: 60%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 375px) {
        width: 95%;
    }
`

export const ContentCard = styled.div`
    padding: 25px;

    @media (max-width: 1366px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media (max-width: 375px) {
        div {
            h4 {
                font-size: 15px;
            }
        }
    }

`