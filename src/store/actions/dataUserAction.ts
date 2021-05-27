import {Dispatch} from 'redux'
import {URL} from '../../apis/api'
import {UserActionTypes, UserAction} from '../type'

export const fetchUserCard = (props: any) => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.FETCH_USER})
        const response = await fetch(`${URL}/${props.match.params.id}`, {method: `GET`})
            .then(response => response.json())
        setTimeout(() => {
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response})
        }, 300)
    } catch (err) {
        dispatch({
            type: UserActionTypes.FETCH_USER_ERROR,
            payload: 'Произошла ошибка при загрузке пользователя.'
        })
    }
}