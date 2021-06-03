import React from 'react'

import './Empty.scss'

const Empty: React.FC = () => {
    return (
        <div className='empty'>
            <div className="empty-container">
                <h1 className='empty-container__title'>There is nothing here</h1>
            </div>
        </div>
    )
}

export default Empty