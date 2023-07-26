import * as S from "./styles";

type TextProps = {
    text: string
    type: string
    size?: number
    color?: string
    bold?: boolean
}

const TextParagraph = ({ text, type, size, color, bold }: TextProps) => {
  return (
    <S.ContentText>
      {type === "h1" && <S.H1 size={size} color={color} bold={bold}>{text}</S.H1>}
      {type === "h2" && <S.H2 size={size} color={color} bold={bold}>{text}</S.H2>}
      {type === "h3" && <S.H3 size={size} color={color} bold={bold}>{text}</S.H3>}
      {type === "h4" && <S.H4 size={size} color={color} bold={bold}>{text}</S.H4>}
      {type === "h5" && <S.H5 size={size} color={color} bold={bold}>{text}</S.H5>}
      {type === "h6" && <S.H6 size={size} color={color} bold={bold}>{text}</S.H6>}
      {type === "p" && <S.P size={size} color={color} bold={bold}>{text}</S.P>}
    </S.ContentText>
  );
};

export default TextParagraph;
