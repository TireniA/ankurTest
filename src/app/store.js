import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/users'
import messageReducer from '../features/messages/messages'

const store = configureStore({
    reducer : {
        users : userReducer,
        messages : messageReducer
    }
})

export default store