import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'filterSearch',
    initialState: {
        filter: '',
        idCharacter: ''
    },

    reducers: {
        changeFilter(state, { payload }) {
            return {...state, filter: payload}
        },
        changeId(state, {payload}) {
            return {...state, idCharacter: payload}
        }
    }
})

export const { changeFilter, changeId } = slice.actions

export const selectPerson = (state: { person: any }) => state.person

export default slice.reducer