import { Dispatch } from 'redux'
import { GENDER_PATH, NAME_PATH, PAGE_PATH, STATUS_PATH, URL } from '../../apis/api'
import { CharactersActionTypes, CharactersAction } from '../type'

export const fetchCharactersList = (page: number, query: string, sortByGender: string, sortByStatus: string) => async (dispatch: Dispatch<CharactersAction>) => {
    try {
        dispatch({type: CharactersActionTypes.FETCH_CHARACTERS})
        dispatch({type: CharactersActionTypes.FETCH_INFO})
        const response = await fetch(`${URL}${PAGE_PATH}${page}${NAME_PATH}${query}${sortByGender !== null ? `${GENDER_PATH}${sortByGender}` : ``}${sortByStatus !== null ? `${STATUS_PATH}${sortByStatus}` : ``}`, {method: `GET`})
            .then(response => response.json())
        if (response.ok) return response.json()
        setTimeout(() => {
            dispatch({type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: response.results})
            dispatch({type: CharactersActionTypes.FETCH_INFO_SUCCESS, payload: response.info})
        }, 300)
    } catch (error) {
        dispatch({
            type: CharactersActionTypes.FETCH_CHARACTERS_ERROR,
            payload: error.message
        })
        dispatch({
            type: CharactersActionTypes.FETCH_INFO_ERROR,
            payload: error.message
        })
    }
}

export const setCharactersPage = (page: number) => {
    return {
        type: CharactersActionTypes.FETCH_CHARACTERS_PAGE, payload: page
    }
}

export const setCharactersQuery = (query: string) => {
    return {
        type: CharactersActionTypes.FETCH_CHARACTERS_QUERY, payload: query
    }
}

export const setSortCharactersByGender = (sortByGender: string) => {
    return {
        type: CharactersActionTypes.FETCH_SORT_BY_GENDER, payload: sortByGender
    }
}

export const setSortCharactersByStatus = (sortByStatus: string) => {
    return {
        type: CharactersActionTypes.FETCH_SORT_BY_STATUS, payload: sortByStatus
    }
}