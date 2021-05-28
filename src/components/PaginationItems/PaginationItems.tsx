import React from 'react'
import {Link} from 'react-router-dom'

import './PaginationItems.scss'

interface IPaginationProps {
    personages: {}[]
    page: number
    pages: number
    pageLimit: number
    onNextPage: (page: number) => void
    onPrevPage: (page: number) => void
    onChangePage: (page: number) => void
}

const PaginationItems: React.FC<IPaginationProps> = ({page, pages, personages, pageLimit, onNextPage, onPrevPage, onChangePage}) => {
    const getPaginationGroup = () => {
        let start = Math.floor((page - 1) / pageLimit) * pageLimit
        // @ts-ignore
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    return (
        <>
            <div className='card pagination'>
                <div className='pagination-container'>
                    <ul className="pagination-list">
                        <li className="pagination-list__item">
                            <Link
                                to={`?page=${page - 1}`}
                                className={`pagination-list__item-prev ${page === 1 ? 'disabled' : ''}`}
                                onClick={() => onPrevPage(page)}
                            >Prev</Link>
                       </li>

                        {getPaginationGroup().map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="pagination-list__item"
                                >
                                    <Link
                                        to={`?page=${item}`}
                                        className={`pagination-list__item-link ${page === item ? 'active' : 'pagination-list__item-link'}`}
                                        onClick={() => onChangePage(item)}
                                    >{item}</Link>
                                </li>
                            )
                        })}

                        <li className="pagination-list__item">
                            <Link
                                to={`?page=${page + 1}`}
                                className={` pagination-list__item-next ${page === pages ? 'disabled' : ''}`}
                                onClick={() => onNextPage(page)}
                            >Next</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PaginationItems