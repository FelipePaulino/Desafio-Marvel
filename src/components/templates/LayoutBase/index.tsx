import FooterDeveloper from '../../organisms/FooterDeveloper'
import HeaderWithHome from '../../organisms/HeaderWithHome'
import * as S from './styles'

type LayoutProps = {
    children: React.ReactNode
}

const LayoutBase = ({ children }: LayoutProps) => {
    return (
        <S.Container>
            <S.ContentHome>
                <HeaderWithHome />
                    {children}
                <FooterDeveloper />
            </S.ContentHome>
        </S.Container>
    )
}

export default LayoutBase