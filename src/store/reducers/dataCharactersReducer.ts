import {CharactersAction, CharactersActionTypes, CharactersState} from '../type'

const initialState = {
    characters: [],
    info: {},
    page: 1,
    pageLimit: 5,
    loading: false,
    error: null,
    query: '',
    sortByGender: '',
    sortByStatus: ''
}

export const dataCharactersReducer = (state: CharactersState = initialState, action: CharactersAction): CharactersState => {
    switch (action.type) {
        case CharactersActionTypes.FETCH_CHARACTERS:
            return {...state, characters: [], loading: true, error: null}
        case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
            return {...state, characters: action.payload, loading: false, error: null}
        case CharactersActionTypes.FETCH_CHARACTERS_ERROR:
            return {...state, characters: [], loading: false, error: action.payload}
        case CharactersActionTypes.FETCH_INFO:
            return {...state, info: {}, loading: true, error: null}
        case CharactersActionTypes.FETCH_INFO_SUCCESS:
            return {...state, info: action.payload, loading: false, error: null}
        case CharactersActionTypes.FETCH_INFO_ERROR:
            return {...state, info: {}, loading: false, error: action.payload}
        case CharactersActionTypes.FETCH_CHARACTERS_PAGE:
            return {...state, page: action.payload}
        case CharactersActionTypes.FETCH_CHARACTERS_QUERY:
            return {...state, query: action.payload}
        case CharactersActionTypes.FETCH_SORT_BY_GENDER:
            return {...state, sortByGender: action.payload}
        case CharactersActionTypes.FETCH_SORT_BY_STATUS:
            return {...state, sortByStatus: action.payload}
        default: return state
    }
}