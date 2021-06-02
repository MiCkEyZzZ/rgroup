import { Dispatch } from 'redux'
import { URL } from '../../apis/api'
import { CharacterAction, CharacterActionTypes } from '../type'

export const fetchUserCard = (props: any) => async (dispatch: Dispatch<CharacterAction>) => {
    try {
        dispatch({type: CharacterActionTypes.FETCH_CHARACTER})
        const response = await fetch(`${URL}/${props.match.params.id}`, {method: `GET`})
            .then(response => response.json())
        setTimeout(() => {
            dispatch({type: CharacterActionTypes.FETCH_CHARACTER_SUCCESS, payload: response})
        }, 300)
    } catch (err) {
        dispatch({
            type: CharacterActionTypes.FETCH_CHARACTER_ERROR,
            payload: err.message
        })
    }
}