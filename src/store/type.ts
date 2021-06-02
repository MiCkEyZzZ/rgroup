export interface CharactersState {
    characters: any[]
    info: any
    loading: boolean
    error: null | string
    page: number,
    query: string,
    sortByGender: string
    sortByStatus: string
    pageLimit: number
}

export enum CharactersActionTypes {
    FETCH_CHARACTERS = 'CHARACTERS/FETCH_CHARACTERS',
    FETCH_CHARACTERS_SUCCESS = 'CHARACTERS/FETCH_CHARACTERS_SUCCESS',
    FETCH_CHARACTERS_ERROR = 'CHARACTERS/FETCH_CHARACTERS_ERROR',
    FETCH_CHARACTERS_PAGE = 'CHARACTERS/FETCH_CHARACTERS_PAGE',
    FETCH_CHARACTERS_QUERY = 'CHARACTERS/FETCH_CHARACTERS_QUERY',
    FETCH_INFO = 'CHARACTERS/FETCH_INFO',
    FETCH_INFO_SUCCESS = 'CHARACTERS/FETCH_INFO_SUCCESS',
    FETCH_INFO_ERROR = 'CHARACTERS/FETCH_INFO_ERROR',
    FETCH_SORT_BY_GENDER = 'CHARACTERS/SET_SORT_BY_GENDER',
    FETCH_SORT_BY_STATUS = 'CHARACTERS/FETCH_SORT_BY_STATUS'
}

export interface FetchCharactersAction {
    type: CharactersActionTypes.FETCH_CHARACTERS
}

export interface FetchCharactersSuccessAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS
    payload: any[]
}

export interface FetchCharactersErrorAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_ERROR
    payload: string
}

export interface FetchInfoAction {
    type: CharactersActionTypes.FETCH_INFO
}

export interface FetchInfoSuccessAction {
    type: CharactersActionTypes.FETCH_INFO_SUCCESS
    payload: {}
}

export interface FetchInfoErrorAction {
    type: CharactersActionTypes.FETCH_INFO_ERROR
    payload: string
}

export interface SetCharactersPage {
    type: CharactersActionTypes.FETCH_CHARACTERS_PAGE
    payload: number
}

export interface SetCharactersQuery {
    type: CharactersActionTypes.FETCH_CHARACTERS_QUERY
    payload: string
}

export interface SetCharactersSortByGender {
    type: CharactersActionTypes.FETCH_SORT_BY_GENDER
    payload: string
}

export interface SetCharactersSortByStatus {
    type: CharactersActionTypes.FETCH_SORT_BY_STATUS
    payload: string
}

export type CharactersAction = FetchCharactersAction |
                          FetchCharactersSuccessAction |
                          FetchCharactersErrorAction |
                          FetchInfoAction |
                          FetchInfoSuccessAction |
                          FetchInfoErrorAction |
                          SetCharactersPage |
                          SetCharactersQuery |
                          SetCharactersSortByGender |
                          SetCharactersSortByStatus

export interface CharacterState {
    character: any
    loading: boolean
    error: null | string
}

export enum CharacterActionTypes {
    FETCH_CHARACTER = 'CHARACTER/FETCH_CHARACTER',
    FETCH_CHARACTER_SUCCESS = 'CHARACTER/FETCH_CHARACTER_SUCCESS',
    FETCH_CHARACTER_ERROR = 'CHARACTER/FETCH_CHARACTER_ERROR'
}

export interface FetchCharacterAction {
    type: CharacterActionTypes.FETCH_CHARACTER
}

export interface FetchCharacterSuccessAction {
    type: CharacterActionTypes.FETCH_CHARACTER_SUCCESS
    payload: {}
}

export interface FetchCharacterErrorAction {
    type: CharacterActionTypes.FETCH_CHARACTER_ERROR
    payload: string
}

export type CharacterAction = FetchCharacterAction | FetchCharacterSuccessAction | FetchCharacterErrorAction