import React from 'react'

import './Button.scss'

interface ButtonProps {
    title: string
    className: string
    onClickButton?: () => void
}

const Button: React.FC<ButtonProps> = ({title, className, onClickButton}) => {
    return (
        <button
            className={className}
            type='button'
            onClick={onClickButton}
        >{title}</button>
    )
}

export default Button