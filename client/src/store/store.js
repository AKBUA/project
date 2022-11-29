import { createStore } from 'redux'
import loginRuducer from "./reducer";
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({ reducer:loginRuducer })
export default store