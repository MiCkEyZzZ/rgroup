import React, { useEffect } from 'react'

import './User.scss'

import { LoaderUsers } from '../../components'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector.hook'

interface IUserProps {
    dataUser: {user: {}, loading: boolean}
}

export const User: React.FC<IUserProps> = (props) => {
    const {fetchUserCard} = useActions()
    const {user, loading} = useTypedSelector(state => state.dataUser)

    useEffect(() => {
        fetchUserCard(props)
    }, [props])

    if (loading) {
        return <LoaderUsers />
    }

    return (
        <div className='container-user'>
            <div className="container-user-card">
                <div className="container-user-card__avatar">
                    <img src={user.image} alt={user.name} />
                </div>
                <div className="container-user-card__info">
                    <h1 className='container-user-card__info-title'>{user.name}</h1>
                    <ul className="container-user-card__info-list">
                        <li className="container-user-card__info-list-item">
                            <p className='container-user-card__info-list-item--label'>STATUS</p>
                            <p className='container-user-card__info-list-item--text'>{user.status}</p>
                        </li>
                        <li className="container-user-card__info-list-item">
                            <p className='container-user-card__info-list-item--label'>SPECIES</p>
                            <p className='container-user-card__info-list-item--text'>{user.species}</p>
                        </li>
                        <li className="container-user-card__info-list-item">
                            <p className='container-user-card__info-list-item--label'>GENDER</p>
                            <p className='container-user-card__info-list-item--text'>{user.gender}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}