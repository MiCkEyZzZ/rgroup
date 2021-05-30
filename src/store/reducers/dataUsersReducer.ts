import {UsersAction, UsersActionTypes, UsersState} from '../type'

const initialState = {
    users: [],
    favorites: [],
    info: {},
    page: 1,
    pageLimit: 5,
    loading: false,
    error: null,
    query: '',
    sortByGender: '',
    sortByStatus: ''
}

export const dataUsersReducer = (state: UsersState = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {...state, users: [], loading: true, error: null}
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {...state, users: action.payload, loading: false, error: null}
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {...state, users: [], loading: false, error: action.payload}
        case UsersActionTypes.FETCH_INFO:
            return {...state, info: {}, loading: true, error: null}
        case UsersActionTypes.FETCH_INFO_SUCCESS:
            return {...state, info: action.payload, loading: false, error: null}
        case UsersActionTypes.FETCH_INFO_ERROR:
            return {...state, info: {}, loading: false, error: action.payload}
        case UsersActionTypes.FETCH_USERS_PAGE:
            return {...state, page: action.payload}
        case UsersActionTypes.FETCH_USERS_QUERY:
            return {...state, query: action.payload}
        case UsersActionTypes.FETCH_SORT_BY_GENDER:
            return {...state, sortByGender: action.payload}
        case UsersActionTypes.FETCH_SORT_BY_STATUS:
            return {...state, sortByStatus: action.payload}
        default: return state
    }
}