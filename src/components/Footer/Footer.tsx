import React from 'react'

import './Footer.scss'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className="footer-context">
                <span className='footer-context-text'>❮❯ by
                    <a className='footer-context-link' href="https://github.com/MiCkEyZzZ">Mikhail Zhuravlev</a>
                </span>
                <span className='footer-context-text'> 2021</span>
            </div>
        </footer>
    )
}

export default Footer