import styled from "styled-components";

export const ContentFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const AuthorDeveloper = styled.div`
    display: flex;

    @media (max-width: 375px) {
        div{
            h6 {
                font-size: 12px;
            }
        }
    }
`