import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users : []
}

const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        addUsers : (state, action) => {
            console.log(action.payload)
            state.users.push(action.payload)
        }
    }
})

export default userSlice.reducer
export const {addUsers} = userSlice.actions