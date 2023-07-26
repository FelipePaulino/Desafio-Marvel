import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import md5 from 'md5';

const publicKey = 'be230fcf0e904bcb9d803fdec48303fc'
const privateKey = '85178cbd4619277355f8e9d98948899001a3415f'
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://gateway.marvel.com/v1/public/'}),
    tagTypes: ["users"],
    endpoints: (builder) => ({
        getCharacters: builder.query<any, void>({
            query: () => `/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
        }),
        getCharacterId: builder.query<any, string>({
            query: (id) => `/characters?nameStartsWith=${id ? `${id}` : ' '}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
        }),
        getCharacterSingle: builder.query<any, any>({
            query: (id) => `/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`,
        }),
    })
})

export default characterApi

export const { useGetCharactersQuery, useGetCharacterIdQuery, useGetCharacterSingleQuery } = characterApi