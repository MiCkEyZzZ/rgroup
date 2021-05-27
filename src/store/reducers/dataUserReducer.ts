import {UserAction, UserActionTypes, UserState} from '../type'

const initialState = {
    user: {},
    loading: false,
    error: null
}

export const dataUserReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {...state, user: {}, loading: true, error: null}
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {...state, user: action.payload, loading: false, error: null}
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state, user: {}, loading: false, error: action.payload}
        default: return state
    }
}