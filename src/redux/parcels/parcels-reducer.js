import {combineReducers} from 'redux'
import { createReducer } from '@reduxjs/toolkit'


const items = createReducer([], {
    'parcels/add': (state, { payload }) => [...state, payload],
    'parcels/delete': (state, { payload }) => state.filter(({ id }) => id !== payload),
    'parcels/edit': (state, { payload }) => state.map(item => {
        if (item.id === payload.id) {
            item = { ...payload }
        }
        return item
    }) 
})
 
export default combineReducers({ items });