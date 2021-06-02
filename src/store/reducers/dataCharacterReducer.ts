import { CharacterAction, CharacterActionTypes, CharacterState } from '../type'

const initialState = {
    character: {},
    loading: false,
    error: null
}

export const dataCharacterReducer = (state: CharacterState = initialState, action: CharacterAction): CharacterState => {
    switch (action.type) {
        case CharacterActionTypes.FETCH_CHARACTER:
            return {...state, character: {}, loading: true, error: null}
        case CharacterActionTypes.FETCH_CHARACTER_SUCCESS:
            return {...state, character: action.payload, loading: false, error: null}
        case CharacterActionTypes.FETCH_CHARACTER_ERROR:
            return {...state, character: {}, loading: false, error: action.payload}
        default: return state
    }
}