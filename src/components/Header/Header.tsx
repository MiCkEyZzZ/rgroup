import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import logo from '../../assets/login.svg'

const Header = () => {
    return (
        <header className='header'>
            <Link className='header-link' to='/personages/'>
                <img src={logo} alt="Rick and Morty"/>
            </Link>
        </header>
    )
}

export default Header