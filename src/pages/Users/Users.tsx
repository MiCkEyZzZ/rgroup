import React, { ChangeEvent, useEffect } from 'react'

import './Users.scss'

import { FilterUsers, FormUsers, ListUsers, PaginationUsers } from '../../components'
import { useTypedSelector } from '../../hooks/useTypedSelector.hook'
import { useActions } from '../../hooks/useActions'

interface IUsersProps {
    dataUsers: {users: [], info: {pages: number}, error: boolean}
}

export const Users: React.FC<IUsersProps> = () => {
    const {fetchUsersList, setUsersPage, setUsersQuery} = useActions()
    const {
        users,
        info,
        error,
        page,
        query,
        sortByGender,
        sortByStatus,
        pageLimit} = useTypedSelector(state => state.dataUsers)

    const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
        setUsersQuery(evt.target.value)
    }

    const goToNextPage = (page: number) => {
        setUsersPage(page + 1)
        console.log(page)
    }

    const goToPreviousPage = (page: number) => {
        setUsersPage(page - 1)
        console.log(page)
    }

    const changePage = (page: number) => {
        setUsersPage(page)
    }

    useEffect(() => {
        fetchUsersList(page, query, sortByGender, sortByStatus)
    }, [page, query, sortByGender, sortByStatus])

    return (
        <div className="container pt-5">
            <FormUsers
                name='name'
                value={query}
                currentPage={page}
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
                personages={users}
                page={page}
                pages={info.pages}
                pageLimit={pageLimit}
                onNextPage={goToNextPage}
                onPrevPage={goToPreviousPage}
                onChangePage={changePage}
            />
        </div>
    )
}