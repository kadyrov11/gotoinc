import {createAction} from '@reduxjs/toolkit'
import { v4 } from 'uuid'


const addParcel = createAction('parcels/add', data => ({
    payload: {
        ...data,
        id: v4()
    }
}))
const deleteParcel = createAction('parcels/delete')

const editParcel = createAction('parcels/edit')

export default {addParcel, deleteParcel,editParcel}