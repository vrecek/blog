import React from 'react'
import { IChildren } from '../../interfaces/CommonInterfaces'

interface IIcon extends IChildren<JSX.Element> {
    cname?: string
}

const Icon = ({children, cname}: IIcon) => {
    return (
        <span className={`icon ${cname ?? ''}`}>

            {children}

        </span>
    )
}

export default Icon