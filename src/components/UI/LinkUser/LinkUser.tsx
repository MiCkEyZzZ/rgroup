import React from 'react'
import {Link} from 'react-router-dom'

import './LinkUser.scss'

interface LinkProps {
    title: string
    className: string
    link: string
}

const LinkUser: React.FC<LinkProps> = ({title, className, link}) => <Link to={link} className={className}>{title}</Link>

export default LinkUser