import styled from 'styled-components'

export const ContentHeader = styled.div`
    width: 100%;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const ImgLogo = styled.img`
    width: 150px;
    
    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
`

export const SearchHero = styled.div`
    display: flex;
    align-items: center;

    Button {
        margin-left: 20px;
    }
`