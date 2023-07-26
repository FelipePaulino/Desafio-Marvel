import styled from 'styled-components'

type ImgProps = {
    width?: number
}

export const ContentIntroduction = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContentButtons = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
`

export const ContentImg = styled.div`
    padding-left: 100px;

    @media (max-width: 1200px) {
        display: none;
    }
`

export const ImgBackground = styled.img<ImgProps>`
    width: ${(props) => props.width ? props.width : '100%'};

    @media (max-width: 1366px) {
        width: 90%;
    }
`

export const ImgBackgroundShield = styled.img<ImgProps>`
    width: 300px;

    @media (max-width: 1366px) {
    }
`
