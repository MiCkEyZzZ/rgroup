import React, { ChangeEvent, useEffect } from 'react'

import './Characters.scss'
import mainPicture from '../../assets/main.svg'

import {
    EmptyCharacters,
    FilterCharacters,
    FooterCharacters,
    FormCharacters,
    HeaderCharacters,
    ListCharacters,
    PaginationCharacters
} from '../../components'
import { useTypedSelector } from '../../hooks/useTypedSelector.hook'
import { useActions } from '../../hooks/useActions'

interface IUsersProps {
    dataUsers: {characters: [], info: {pages: number}, error: boolean}
}

const Characters: React.FC<IUsersProps> = () => {
    const { fetchCharactersList, setCharactersPage, setCharactersQuery } = useActions()
    const {
        characters,
        info,
        error,
        page,
        query,
        sortByGender,
        sortByStatus,
        pageLimit } = useTypedSelector(state => state.dataCharacters)

    const handleValidationInput = () => {}

    const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
        handleValidationInput()
        setCharactersQuery(evt.target.value)
    }

    const goToNextPage = (page: number) => {
        setCharactersPage(page + 1)
    }

    const goToPreviousPage = (page: number) => {
        setCharactersPage(page - 1)
    }

    const changePage = (page: number) => {
        setCharactersPage(page)
    }

    useEffect(() => {
        fetchCharactersList(page, query, sortByGender, sortByStatus)
    }, [page, query, sortByGender, sortByStatus])

    return (
        <>
            <HeaderCharacters />
            <main className="container-characters">
                <section className='container-characters-header'>
                    <h1 className='container-characters-header__title'>The Rick and Morty</h1>
                    <div className="container-characters-header__image">
                        <img src={mainPicture} alt="Rick and Morty"/>
                    </div>
                </section>
                <section className='container-characters-body'>
                    <FormCharacters
                        name='name'
                        value={query}
                        onChangeInput={handleChangeInput}
                    />

                    <FilterCharacters
                        sortByGender={sortByGender}
                        sortByStatus={sortByStatus}
                    />
                </section>
                <section className="container-characters-footer">
                    {characters.length ? <ListCharacters
                        characters={characters}
                        error={error}
                    /> : <EmptyCharacters />}

                    {characters.length ? <PaginationCharacters
                        characters={characters}
                        page={page}
                        pages={info.pages}
                        pageLimit={pageLimit}
                        onNextPage={goToNextPage}
                        onPrevPage={goToPreviousPage}
                        onChangePage={changePage}
                    /> : null}
                </section>
            </main>
            <FooterCharacters />
        </>
    )
}

export default Characters