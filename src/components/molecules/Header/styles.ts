import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    padding: 10px 0;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (max-width: 600px) {
        height: 150px;
    }
`