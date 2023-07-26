import styled from "styled-components";

type TextProps = {
    size?: number
    color?: string
    bold?: boolean
}

export const ContentText = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 5px;
`

export const H1 = styled.h1<TextProps>`
    font-size: ${(props) => props.size ? props.size : '40px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`

export const H2 = styled.h2<TextProps>`
    font-size: ${(props) => props.size ? props.size : '35px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`

export const H3 = styled.h3<TextProps>`
    font-size: ${(props) => props.size ? props.size : '30px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`

export const H4 = styled.h4<TextProps>`
    font-size: ${(props) => props.size ? props.size : '25px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`

export const H5 = styled.h5<TextProps>`
    font-size: ${(props) => props.size ? props.size : '20px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`

export const H6 = styled.h6<TextProps>`
    font-size: ${(props) => props.size ? props.size : '15px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`

export const P = styled.p<TextProps>`
    font-size: ${(props) => props.size ? props.size : '12px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`