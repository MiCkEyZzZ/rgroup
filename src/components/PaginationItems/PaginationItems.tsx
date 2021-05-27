import React from 'react'
import {Link} from 'react-router-dom'

import './PaginationItems.scss'
import {getPagesCount} from '../../utils/common'

interface IPaginationProps {
    currentPage: number
    count: number
    pages: number
    onClickPaginationNext: () => void
    onClickPaginationPrev: () => void
    setUsersPage: Function
}

const PaginationItems: React.FC<IPaginationProps> = ({currentPage, pages, count, onClickPaginationPrev, onClickPaginationNext, setUsersPage}) => {
    const pagesItems = getPagesCount(pages)
    const perPage = 5
    console.log(pagesItems)
    const lastPage = currentPage * perPage
    const firstPage = lastPage - perPage
    const currentTodos = pagesItems.slice(firstPage, lastPage)

    const renderElement = () => {}

    return (
        <>
            <div className='card pagination'>
                <div className='pagination-container'>
                    <ul className="pagination-list">
                        <li className="pagination-list__item">
                            <Link
                                to={`?page=${currentPage}`}
                                className="pagination-list__item-link"
                            >First</Link>
                        </li>

                        <li className="pagination-list__item">
                            <Link
                                to={`?page=${currentPage - 1}`}
                                className="pagination-list__item-link"
                                onClick={() => onClickPaginationPrev()}
                            >Prev</Link>
                       </li>

                        {currentTodos.map((todo, index) => {
                            return (
                                <li
                                    key={index}
                                    className="pagination-list__item"
                                >
                                    <Link
                                        to={`?page=${todo}`}
                                        className='pagination-list__item-link'
                                        onClick={() => setUsersPage(todo)}
                                    >{todo}</Link>
                                </li>
                            )
                        })}

                        <li className="pagination-list__item">
                            <Link
                                to={`?page=${currentPage + 1}`}
                                className="pagination-list__item-link"
                                onClick={() => onClickPaginationNext()}
                            >Next</Link>
                        </li>

                        <li className="pagination-list__item">
                            <Link
                                to={`?page=${count}`}
                                className="pagination-list__item-link"
                            >Last</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PaginationItems