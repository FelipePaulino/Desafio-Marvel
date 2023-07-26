import * as S from './styles'
import { useRouter } from "next/router";
import Card from '../../../components/molecules/Card';
import CardImage from '../../../components/atoms/CardImage';
import TextParagraph from '../../../components/atoms/TextParagraph';

type CharacterOptionProps = {
    option: {
        id: string
        thumbnail: {
            path: string
            extension: string
        }
        name: string
    }
    index: string
    action?: () => void
}

const CharacterOption = ({ option, index, action }: CharacterOptionProps) => {
    return (
        <S.CardClick onClick={action}
            key={index}
            data-testid='button-card'>
            <Card noBorder>
                <S.DetailsPerson>
                    <CardImage width={200} height={200} url={`${option.thumbnail.path}.${option.thumbnail.extension}`} />
                    <TextParagraph text={option.name} type="h5" />
                </S.DetailsPerson>
            </Card>
        </S.CardClick>
    )
}

export default CharacterOption