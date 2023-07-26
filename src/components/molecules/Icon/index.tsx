import * as S from './styles'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TextParagraph from '../../atoms/TextParagraph';
import { UrlObject } from 'url';

type IconProps = {
    type: string
    text?: string | undefined
    typeParagraph: string
    size?: "small" | "inherit" | "large" | "medium" | undefined
    color?: "inherit" | "disabled" | "action" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined
    href?: string | undefined
}

const Icon = ({ type, text, size, color, typeParagraph, href }: IconProps) => {
    return (
        <S.ContentIcon href={href}>
            {type === 'back' &&
                <ArrowBackOutlinedIcon fontSize={size} color={color} />
            }
            {text &&
                <TextParagraph text={text} type={typeParagraph} />
            }
        </S.ContentIcon>
    )
}

export default Icon