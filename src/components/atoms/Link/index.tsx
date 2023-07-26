import * as S from "./styles";

type LinkProps = {
    children?: React.ReactNode
    href?: string 
}

const Link = ({children, href}: LinkProps) => {
    return (
        <S.RedirectLink href={href}>
            {children}
        </S.RedirectLink>
    )
}

export default Link