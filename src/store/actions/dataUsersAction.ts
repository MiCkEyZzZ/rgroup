import {Dispatch} from 'redux'
import {GENDER_PATH, NAME_PATH, PAGE_PATH, STATUS_PATH, URL} from '../../apis/api'
import {UsersAction, UsersActionTypes} from '../type'

export const fetchUsersList = (page: number, query: string, sortByGender: string, sortByStatus: string) => async (dispatch: Dispatch<UsersAction>) => {
    try {
        dispatch({type: UsersActionTypes.FETCH_USERS})
        dispatch({type: UsersActionTypes.FETCH_INFO})
        const response = await fetch(`${URL}${PAGE_PATH}${page}${NAME_PATH}${query}${sortByGender !== null ? `${GENDER_PATH}${sortByGender}` : ``}${sortByStatus !== null ? `${STATUS_PATH}${sortByStatus}` : ``}`, {method: `GET`})
            .then(response => response.json())
        setTimeout(() => {
            dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.results})
            dispatch({type: UsersActionTypes.FETCH_INFO_SUCCESS, payload: response.info})
        }, 300)
    } catch (err) {
        dispatch({
            type: UsersActionTypes.FETCH_USERS_ERROR,
            payload: 'Произошла ошибка при загрузке пользователей.'
        })
    }
}

export const setUsersPage = (page: number) => {
    return {
        type: UsersActionTypes.FETCH_USERS_PAGE, payload: page
    }
}

export const setUsersQuery = (query: string) => {
    return {
        type: UsersActionTypes.FETCH_USERS_QUERY, payload: query
    }
}

export const setSortUsersByGender = (sortByGender: string) => {
    return {
        type: UsersActionTypes.FETCH_SORT_BY_GENDER, payload: sortByGender
    }
}

export const setSortUsersByStatus = (sortByStatus: string) => {
    return {
        type: UsersActionTypes.FETCH_SORT_BY_STATUS, payload: sortByStatus
    }
}