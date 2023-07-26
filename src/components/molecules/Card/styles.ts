import styled from "styled-components";

type CardContentProps = {
    color?: string
    noBorder?: boolean
}

export const Container = styled.div<CardContentProps>`
    background-color: ${(props) => props.color ? props.color : '#fff'};
    border-radius: ${(props) => props.noBorder ? '0' : '24px'};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 10px;
    padding: 0;
`

export const ContentCard = styled.div`
    padding: 25px;
`
