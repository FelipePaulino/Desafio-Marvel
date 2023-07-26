import * as S from "./styles";

type CardProps = {
  children?: React.ReactNode;
  click?: () => void
  color?: string
  noBorder?: boolean
};

const Card = ({ children, click, color, noBorder }: CardProps) => {
  return (
    <S.Container color={color} onClick={click} noBorder={noBorder}>
      <S.ContentCard>{children}</S.ContentCard>
    </S.Container>
  );
};

export default Card;
