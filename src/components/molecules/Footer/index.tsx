import * as S from './styles'

type FooterProps = {
    children?: React.ReactNode
}

const Footer = ({children}: FooterProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default Footer