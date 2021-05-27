import {combineReducers} from '@reduxjs/toolkit'

import {dataUsersReducer} from './dataUsersReducer'
import {dataUserReducer} from './dataUserReducer'

export const rootReducer = combineReducers({
    dataUsers: dataUsersReducer,
    dataUser: dataUserReducer
})

export type RootState = ReturnType<typeof rootReducer>