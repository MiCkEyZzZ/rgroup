import React, { ChangeEvent, useEffect } from 'react'

import './Users.scss'

import { FilterUsers, FormUsers, ListUsers, PaginationUsers } from '../../components'
import { useTypedSelector } from '../../hooks/useTypedSelector.hook'
import { useActions } from '../../hooks/useActions'

interface IUsersProps {
    dataUsers: {users: [], info: {count: number, pages: number}, error: boolean}
}

export const Users: React.FC<IUsersProps> = () => {
    const {fetchUsersList, setUsersPage, setUsersQuery} = useActions()
    const {users, info, error, currentPage, query, sortByGender, sortByStatus} = useTypedSelector(state => state.dataUsers)

    const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
        setUsersQuery(evt.target.value)
    }

    const handleNextPage = () => {
        if (currentPage < info.pages) {
            setUsersPage(currentPage + 1)
        } else {
            setUsersPage(1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setUsersPage(currentPage - 1)
        } else {
            setUsersPage(1)
        }
    }

    useEffect(() => {
        fetchUsersList(currentPage, query, sortByGender, sortByStatus)
    }, [currentPage, query, sortByGender, sortByStatus])

    return (
        <div className="container pt-5">
            <FormUsers
                name='name'
                value={query}
                page={currentPage}
                pages={info.pages}
                onChangeInput={handleChangeInput}
            />

            <FilterUsers
                sortByGender={sortByGender}
                sortByStatus={sortByStatus}
            />

            <ListUsers
                personages={users}
                error={error}
            />

            <PaginationUsers
                count={info.count}
                currentPage={currentPage}
                pages={info.pages}
                setUsersPage={setUsersPage}
                onClickPaginationNext={handleNextPage}
                onClickPaginationPrev={handlePrevPage}
            />
        </div>
    )
}