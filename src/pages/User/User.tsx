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
        <div className='container pt-5'>
            <div className="user">
                <div className="user-card">
                    <div className="user-card-avatar">
                        <img src={user.image} alt={user.name} />
                    </div>
                    <div className="user-card-info">
                        <h1 className='user-card-info__title'>{user.name}</h1>
                        <ul className="user-card-info__list">
                            <li className="user-card-info__list-item">
                                <p className='user-card-info__list-item--label'>STATUS</p>
                                <p className='user-card-info__list-item--text'>{user.status}</p>
                            </li>
                            <li className="user-card-info__list-item">
                                <p className='user-card-info__list-item--label'>SPECIES</p>
                                <p className='user-card-info__list-item--text'>{user.species}</p>
                            </li>
                            <li className="user-card-info__list-item">
                                <p className='user-card-info__list-item--label'>GENDER</p>
                                <p className='user-card-info__list-item--text'>{user.gender}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}