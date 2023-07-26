import styled from 'styled-components'

export const ComeBack = styled.div`
    width: 120px;
    margin: 20px 50px;
`

export const ContentInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 50px;
`

export const Appearances = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 920px) {
        flex-direction: column;
        align-items: center;
    }
`