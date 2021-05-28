import React from 'react'

import './Form.scss'

interface IFormProps {
    value: string
    currentPage: number
    pages: number
    name: string
    onChangeInput: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Form: React.FC<IFormProps> = ({value, currentPage, pages, name, onChangeInput}) => {
    return (
        <div className="form">
            <h2 className='form-title'>A test task for the ResolventaGroup company.</h2>
            <form className="form-control">
                <input
                    type="text"
                    value={value}
                    name={name}
                    autoComplete='off'
                    placeholder='Enter name...'
                    onChange={onChangeInput}
                />
                <p className='form-count'>
                    <span className='form-count-to'>{currentPage}</span>&nbsp;/&nbsp;
                    <span className='form-count-from'>{pages}</span>
                </p>
            </form>
        </div>
    )
}

export default Form