import * as S from './styles'

type HeaderProps = {
    children?: React.ReactNode
}

const Header = ({children}: HeaderProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default Header