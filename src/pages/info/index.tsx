import Icon from "../../components/molecules/Icon";
import CharacterCard from "../../components/organisms/CharacterCard";
import List from "../../components/organisms/List";
import LayoutBase from "../../components/templates/LayoutBase";
import FormEdit from "@/components/organisms/FormEdit";

import * as S from "./styles";

import Router, { useRouter } from "next/router";

import characterApi from "../../storeConfig/apiSlice";
import { useEffect, useState } from "react";

const Info = () => {
  const router = useRouter();
  const { data } = characterApi.useGetCharacterSingleQuery(router.query.id);


  useEffect(() => {
    document.title = 'Marvel API';
  })

  
  return (
    <LayoutBase>
      <S.ContentInfo>
        <S.ComeBack onClick={() => Router.push("/person")}>
          <Icon type="back" text="Return" typeParagraph="h4" />
        </S.ComeBack>
        {data &&
          data?.data?.results?.map((character: any, index: any) => {
            return (
              <div key={character?.id}>
              <S.Column key={index}>
                <CharacterCard data={character}/>
                <S.Appearances>
                  <List title="Comics" data={character.comics} />
                  <List title="Events" data={character.events} />
                  <List title="Series" data={character.series} />
                  <List title="Stories" data={character.stories} />
                </S.Appearances>
              </S.Column>
              </div>
            );
          })}
      </S.ContentInfo>
    </LayoutBase>
  );
};

export default Info;
