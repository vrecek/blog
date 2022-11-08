import React from 'react'
import { IChildren } from '../../interfaces/CommonInterfaces'

interface IIcon extends IChildren<JSX.Element> {
    cname?: string,
    action?: React.MouseEventHandler
}

const Icon = ({children, cname, action}: IIcon) => {
    return (
        <span onClick={action} className={`icon ${cname ?? ''}`}>

            {children}

        </span>
    )
}

export default Icon