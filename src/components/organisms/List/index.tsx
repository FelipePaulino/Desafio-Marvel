import TextParagraph from "../../../components/atoms/TextParagraph"
import CardContent from "../../../components/molecules/CardContent"

import * as S from './styles'

type ListProps = {
    title: string
    data: {
        items: any
    }
}

const List = ({title, data}: ListProps) => {
    return (
        <CardContent noBorder>
        <TextParagraph text={title} type="h2" bold />
        <S.UlCategory>
            {data.items.length !== 0 ? data.items.map((item: {name: string}, index: string) => {
                return (
                    <S.LiCategory key={index}>
                        {index + 1}- {item.name}
                    </S.LiCategory>
                )
            })
                :
                <S.LiCategory>
                    No info
                </S.LiCategory>
            }
        </S.UlCategory>
    </CardContent>
    )
}

export default List