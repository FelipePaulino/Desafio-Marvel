import TextParagraph from "../../components/atoms/TextParagraph";
import LayoutBase from "../../components/templates/LayoutBase";
import ButtonAction from "../../components/molecules/ButtonAction";
import CharacterOption from "../../components/organisms/CharacterOption";

import * as S from './styles'

import api from "../../services/api";
import characterApi from "../../storeConfig/apiSlice";
import { useAppSelector } from "../../storeConfig/hooks/useAppSelector";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeId } from "@/storeConfig/slice";
import router from "next/router";
 
const Person = () => {
  const [searchPerson, setSearchPerson] = useState<any>();
  const [personLength, setPersonLength] = useState<number>();
  const { filter } = useAppSelector((store) => store.personGet)
  const dispatch = useDispatch()

  const baseURL = filter ? `/characters?nameStartsWith=${filter}` : '/characters';

  const { data: searchCharacters } = characterApi.useGetCharacterIdQuery(filter)
  const { data: allCharacters } = characterApi.useGetCharactersQuery()

  useEffect(() => {
    document.title = 'Marvel API';
  })

  useEffect(() => {
    if (filter) {
      setSearchPerson(searchCharacters?.data?.results)
      setPersonLength(searchCharacters?.data?.total)
    }
     else {
      setSearchPerson(allCharacters?.data?.results)
      setPersonLength(allCharacters?.data?.total)
    }
  }, [filter, searchCharacters, allCharacters])

  const handleMore = useCallback(async () => {
    try {
      const offset = searchPerson.length;
      const response = await api.get(baseURL, {
        params: {
          offset,
        }
      })

      setSearchPerson([...searchPerson, ...response.data.data.results])
    } catch (err) {
      alert(err)
    }
  }, [searchPerson])

  const sendInfo = (id: any) => {
    dispatch(changeId(id))
    router.push(`info?id=${id}`)
  }

  return (
    <LayoutBase>
      {searchPerson?.length > 0 ?
        <>
          <S.ContentTitle>
            <TextParagraph text='choose a character' type="h1" />
          </S.ContentTitle>
          <S.ContentCards>
            {searchPerson?.map((person: any, index: string) => {
              return (
                <CharacterOption action={() => sendInfo(person.id)}option={person} index={index} key={index}/>
              )
            })}
          </S.ContentCards>
          {searchPerson.length !== personLength &&
            <S.ContainerButton>
              <ButtonAction label='More' action={() => handleMore()} />
            </S.ContainerButton>
          }
        </>
        :
        <TextParagraph text='No characters found' type="h1" />
      }
    </LayoutBase>
  );
};

export default Person;
