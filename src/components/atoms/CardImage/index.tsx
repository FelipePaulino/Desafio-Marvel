import * as S from './styles'

type CardImageProps = {
    url: string
    width?: number
    height?: number
}

const CardImage = ({url, width, height}: CardImageProps) => {
    return (
        <S.ImageBox            
            width={width}
            height={height} 
            src={url} 
            alt={`${url}_img`}
            data-testid='cardImage'
        />
    )
}

export default CardImage