import * as S from "./styles";
import CardContent from "../../components/molecules/CardContent";
import TextParagraph from "../../components/atoms/TextParagraph";
import ButtonAction from "../../components/molecules/ButtonAction";
import LayoutBase from "../../components/templates/LayoutBase";

import Router from "next/router";

const Introduction = () => {  
  return (
    <LayoutBase>
      <S.ContentIntroduction>
        <CardContent noBorder>
          <S.ContentCard>
            <S.ImgBackgroundShield src="./images/shield.png" alt="shield-capitao"/>
            <TextParagraph type="h1" text="MARVEL API" />
            <TextParagraph
              type="h4"
              text="The Marvel Comics API allows developers 
              everywhere to access information about Marvel's 
              vast library of comics—from what's coming up, to 
              70 years ago."
            />
          </S.ContentCard>
          <S.ContentButtons>
            <ButtonAction label="Characters" action={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault()
              Router.push('person')
            }} />
          </S.ContentButtons>
        </CardContent>
        <S.ContentImg>
          <S.ImgBackground src="./images/iron-man.png" alt="iron-man" />
        </S.ContentImg>
      </S.ContentIntroduction>
    </LayoutBase>
  );
};

export default Introduction
