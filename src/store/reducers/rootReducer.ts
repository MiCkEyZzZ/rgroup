import {combineReducers} from '@reduxjs/toolkit'

import {dataCharactersReducer} from './dataCharactersReducer'
import {dataCharacterReducer} from './dataCharacterReducer'

export const rootReducer = combineReducers({
    dataCharacters: dataCharactersReducer,
    dataCharacter: dataCharacterReducer
})

export type RootState = ReturnType<typeof rootReducer>