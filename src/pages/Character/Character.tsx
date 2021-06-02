import React, { useEffect } from 'react'

import './Character.scss'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector.hook'

import { LoaderCharacters } from '../../components'

interface IUserProps {
    dataUser: {character: {}, loading: boolean}
}

const Character: React.FC<IUserProps> = (props) => {
    const { fetchUserCard } = useActions()
    const { character, loading } = useTypedSelector(state => state.dataCharacter)

    useEffect(() => {
        fetchUserCard(props)
    }, [props])

    if (loading) {
        return <LoaderCharacters />
    }

    return (
        <div className='container-character'>
            <div className="container-character-card">
                <div className="container-character-card__avatar">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="container-character-card__info">
                    <h1 className='container-character-card__info-title'>{character.name}</h1>
                    <ul className="container-character-card__info-list">
                        <li className="container-character-card__info-list-item">
                            <p className='container-character-card__info-list-item--label'>STATUS</p>
                            <p className='container-character-card__info-list-item--text'>{character.status}</p>
                        </li>
                        <li className="container-character-card__info-list-item">
                            <p className='container-character-card__info-list-item--label'>SPECIES</p>
                            <p className='container-character-card__info-list-item--text'>{character.species}</p>
                        </li>
                        <li className="container-character-card__info-list-item">
                            <p className='container-character-card__info-list-item--label'>GENDER</p>
                            <p className='container-character-card__info-list-item--text'>{character.gender}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Character