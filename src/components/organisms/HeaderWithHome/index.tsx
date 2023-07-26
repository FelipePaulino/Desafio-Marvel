import { useState } from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";


import ButtonAction from "../../molecules/ButtonAction";
import InputText from "../../molecules/InputText";
import Header from "../../molecules/Header";
import Link from "../../atoms/Link";

import * as S from "./styles";
import { changeFilter } from "@/storeConfig/slice";

const HeaderWithHome = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const submitSearch = () => {
    Router.push(`/person`)
    dispatch(changeFilter(search))
  }

  return (
    <Header>
      <S.ContentHeader>
        <Link href="/">
          <S.ImgLogo src="./images/marvel-logo.png" alt="marvel" />
        </Link>
        <S.SearchHero>
          <InputText labelText="Character" change={(e: any) => setSearch(e.target.value)} />
          <ButtonAction label="Search" action={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault()
            submitSearch()}} />
        </S.SearchHero>
      </S.ContentHeader>
    </Header>
  );
};

export default HeaderWithHome;
