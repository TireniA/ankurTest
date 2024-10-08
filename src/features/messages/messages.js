import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages : [],
    page : 0
}

const messageSlice = createSlice({
    name : 'messages',
    initialState,
    reducers : {
        addMessages : ((state, action) => {
            state.messages.push(action.payload)
        }),
        loadMessages : ((state, action) => {
            state.messages  = action.payload
        }),
        incrementPage : (state => {
            state.page += 1
        })

    }
})

export default messageSlice.reducer
export const {addMessages, loadMessages, incrementPage} = messageSlice.actions