import React from 'react'

import './List.scss'


import {ButtonUsers, LinkUsers} from '../index'
import { makeShortTitleText } from '../../utils/common'

const favorites = 'favorites'

interface IListProps {
    personages: {
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

const List: React.FC<IListProps> = ({personages, error}) => {
    const addUserFavorite = (id: number) => {
        // dispatch(addFavorite(id))
        const user = personages.find(personage => personage.id === id)
        localStorage.setItem(favorites, JSON.stringify([user]))
    }

    if (error) {
        return (
            <div className="list">
                <p>{error}</p>
            </div>
        )
    }

    return (
        <>
            <div className="list">
                <ul className="list-table">
                    {personages.map((personage, index) => {
                        return (
                            <li
                                key={`{${personage.id}_${index}`}
                                className="list-table-item"
                            >
                                <div className="list-table-item__info">
                                    <ul className="list-table-item__info-list">
                                        <li className='list-table-item__info-item'>
                                            <div className='list-table-item__info-avatar'>
                                                <img className='list-table-item__info-avatar--image' src={personage.image} alt={personage.name} />
                                            </div>
                                            <div className="list-table-item__info-title">
                                                <h3 className='list-table-item__info-title--text'>{makeShortTitleText(personage.name)}</h3>
                                            </div>
                                        </li>

                                        <li className='list-table-item__info-item'>
                                            <ul className='list-table-item__more-list'>
                                                <li className='list-table-item__more-item'>
                                                    <p className='list-table-item__more-item--name'>GENDER:</p>&nbsp;
                                                    <p className='list-table-item__more-item--text'>{personage.gender}</p>
                                                </li>
                                                <li className='list-table-item__more-item'>
                                                    <p className='list-table-item__more-item--name'>STATUS:</p>&nbsp;
                                                    <p className='list-table-item__more-item--text'>{personage.status}</p>
                                                </li>
                                                <li className='list-table-item__more-item'>
                                                    <p className='list-table-item__more-item--name'>SPECIES:</p>&nbsp;
                                                    <p className='list-table-item__more-item--text'>{personage.species}</p>
                                                </li>
                                                <li className='list-table-item__more-item'>
                                                    <p className='list-table-item__more-item--name'>LOCATION:</p>&nbsp;
                                                    <p className='list-table-item__more-item--text'>{personage.location.name}</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div className='list-table__btn-group'>
                                    <ButtonUsers
                                        title='Add Favorite'
                                        className='btn'
                                        onClickButton={() => addUserFavorite(personage.id)}
                                    />

                                    <LinkUsers
                                        title='Show more'
                                        className='link'
                                        link={`/personages/personage/${personage.id}`}
                                    />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default List