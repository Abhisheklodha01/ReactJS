import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/Todoslice';


export const store = configureStore({
    reducer: todoReducer
})