import React from 'react'

import './List.scss'

import { ButtonCharacters, LinkCharacters } from '../index'
import { makeShortTitleText } from '../../utils/common'

interface IListProps {
    characters: {
        id: number
        image: string
        name: string
        gender: string
        status: string
        species: string
        location: {name: string}
    }[]
    error: null | string
}

const List: React.FC<IListProps> = ({characters, error}) => {
    const addUserFavorite = (id: number) => {}

    const statusColor = {
        alive: 'alive',
        dead: 'dead',
        unknown: 'unknown',
    }

    if (error) {
        return (
            <div className="list">
                <p>There is nothing here</p>
            </div>
        )
    }

    return (
        <>
            <div className="list">
                <ul className="list-table">
                    {characters && characters.map((character, index) => (
                            <li
                                key={`{${character.id}_${index}`}
                                className="list-table-item"
                            >
                                <div className="list-table-item__info">
                                    <ul className="list-table-item__info-list">
                                        <li className='list-table-item__info-item'>
                                            <div className='list-table-item__info-avatar'>
                                                <img className='list-table-item__info-avatar--image' src={character.image} alt={character.name} />
                                            </div>
                                        </li>
                                        <li className='list-table-item__info-item list-table-item__user'>
                                            <div className="list-table-item__user-title">
                                                <h3 className='list-table-item__user-title--text'>{makeShortTitleText(character.name)}</h3>
                                                <span className='list-table-item__user-status'>
                                                    <span className={`list-table-item__user-status--icon list-table-item__user-status--${statusColor.dead}`}></span>
                                                    <p className='list-table-item__user-status--text'>{character.status}  -  {character.species}</p>
                                                </span>
                                            </div>
                                            <div className="list-table-item__user-loc">
                                                <span className="list-table-item__user-loc--title">Last known location:</span>
                                                {character.location.name}
                                            </div>
                                            <div className="list-table-item__user-loc">
                                                <span className="list-table-item__user-loc--title">Gender:</span>
                                                {character.gender}
                                            </div>
                                            <div className='list-table-item__user-btn'>
                                                <ButtonCharacters
                                                    title='Add Favorite'
                                                    className='btn'
                                                    onClickButton={() => addUserFavorite(character.id)}
                                                />
                                                <LinkCharacters
                                                    title='Show more'
                                                    className='link'
                                                    link={`/personages/personage/${character.id}`}
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default List