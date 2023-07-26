import Footer from "../../molecules/Footer"
import TextParagraph from "../../atoms/TextParagraph"
import * as S from './styles'

const FooterDeveloper = () => {
    return (
        <Footer>
            <S.ContentFooter>
                <S.AuthorDeveloper>
                    <TextParagraph type="h6" color='#fff' text='© 2023 -'/>
                    <TextParagraph type="h6" color='#fff' text='Desenvolvido por Felipe Paulino'/>
                </S.AuthorDeveloper>
            </S.ContentFooter>
        </Footer>
    )
}

export default FooterDeveloper