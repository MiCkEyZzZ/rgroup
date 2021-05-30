export interface UsersState {
    users: any[]
    info: any
    loading: boolean
    error: null | string
    page: number,
    query: string,
    sortByGender: string
    sortByStatus: string
    pageLimit: number
}

export enum UsersActionTypes {
    FETCH_USERS = 'USERS/FETCH_USERS',
    FETCH_USERS_SUCCESS = 'USERS/FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'USERS/FETCH_USERS_ERROR',
    FETCH_INFO = 'USERS/FETCH_INFO',
    FETCH_INFO_SUCCESS = 'USERS/FETCH_INFO_SUCCESS',
    FETCH_INFO_ERROR = 'USERS/FETCH_INFO_ERROR',
    FETCH_USERS_PAGE = 'USERS/FETCH_USERS_PAGE',
    FETCH_USERS_QUERY = 'USERS/FETCH_USERS_QUERY',
    FETCH_SORT_BY_GENDER = 'USERS/SET_SORT_BY_GENDER',
    FETCH_SORT_BY_STATUS = 'USERS/FETCH_SORT_BY_STATUS'
}

export interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS
}

export interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

export interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR
    payload: string
}

export interface FetchInfoAction {
    type: UsersActionTypes.FETCH_INFO
}

export interface FetchInfoSuccessAction {
    type: UsersActionTypes.FETCH_INFO_SUCCESS
    payload: {}
}

export interface FetchInfoErrorAction {
    type: UsersActionTypes.FETCH_INFO_ERROR
    payload: string
}

export interface SetUsersPage {
    type: UsersActionTypes.FETCH_USERS_PAGE
    payload: number
}

export interface SetUsersQuery {
    type: UsersActionTypes.FETCH_USERS_QUERY
    payload: string
}

export interface SetUsersSortByGender {
    type: UsersActionTypes.FETCH_SORT_BY_GENDER
    payload: string
}

export interface SetUsersSortByStatus {
    type: UsersActionTypes.FETCH_SORT_BY_STATUS
    payload: string
}

export type UsersAction = FetchUsersAction |
                          FetchUsersSuccessAction |
                          FetchUsersErrorAction |
                          FetchInfoAction |
                          FetchInfoSuccessAction |
                          FetchInfoErrorAction |
                          SetUsersPage |
                          SetUsersQuery |
                          SetUsersSortByGender |
                          SetUsersSortByStatus

export interface UserState {
    user: any
    loading: boolean
    error: null | string
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USER
}

export interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS
    payload: {}
}

export interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction