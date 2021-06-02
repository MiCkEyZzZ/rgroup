import React from 'react'
import ContentLoader  from "react-content-loader"

import './Suspense.scss'

const Suspense = () => {
    return (
        <ContentLoader
            speed={2}
            width={600}
            height={224}
            viewBox="0 0 600 224"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="5" ry="5" width="230" height="224" />
            <rect x="647" y="-3" rx="3" ry="3" width="255" height="43" />
            <rect x="242" y="188" rx="5" ry="5" width="100" height="30" />
            <rect x="242" y="0" rx="3" ry="3" width="356" height="51" />
            <rect x="354" y="188" rx="5" ry="5" width="100" height="30" />
            <rect x="243" y="60" rx="3" ry="3" width="356" height="51" />
            <rect x="242" y="120" rx="3" ry="3" width="356" height="51" />
        </ContentLoader >
    )
}

export default Suspense