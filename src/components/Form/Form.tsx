import React from 'react'

import './Form.scss'

interface IFormProps {
    value: string
    name: string
    onChangeInput: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Form: React.FC<IFormProps> = ({value, name, onChangeInput}) => {
    return (
        <div className="form">
            <form className="form-control">
                <input
                    type="text"
                    value={value}
                    name={name}
                    autoComplete='off'
                    placeholder='Enter name...'
                    onChange={onChangeInput}
                />
            </form>
        </div>
    )
}

export default Form