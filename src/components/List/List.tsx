import React from 'react'
import cn from 'classnames'

import './List.scss'

import {ButtonUsers, LinkUsers} from '../index'
import { makeShortTitleText } from '../../utils/common'

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
    const addUserFavorite = (id: number) => {}

    const style = 'background'

    const statusColor = {
        alive: 'alive',
        dead: 'dead',
        unknown: 'unknown',
    }

    if (error) {
        return (
            <div className="list">
                <p>There is nothing here.</p>
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
                                        </li>
                                        <li className='list-table-item__info-item list-table-item__user'>
                                            <div className="list-table-item__user-title">
                                                <h3 className='list-table-item__user-title--text'>{makeShortTitleText(personage.name)}</h3>
                                                <span className='list-table-item__user-status'>
                                                    <span className={`list-table-item__user-status--icon list-table-item__user-status--${statusColor.dead}`}></span>
                                                    <p className='list-table-item__user-status--text'>{personage.status}  -  {personage.species}</p>
                                                </span>
                                            </div>
                                            <div className="list-table-item__user-loc">
                                                <span className="list-table-item__user-loc--title">Last known location:</span>
                                                {personage.location.name}
                                            </div>
                                            <div className="list-table-item__user-loc">
                                                <span className="list-table-item__user-loc--title">Gender:</span>
                                                {personage.gender}
                                            </div>
                                            <div className='list-table-item__user-btn'>
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
                                    </ul>
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