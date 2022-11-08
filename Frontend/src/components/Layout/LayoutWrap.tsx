import React from 'react'
import { IChildren } from '../../interfaces/CommonInterfaces'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutNavigation from './Navigation/LayoutNavigation'

const LayoutWrap = ({children}: IChildren<JSX.Element>) => {
    return (
        <>
            <LayoutNavigation />
            {children}
            <LayoutFooter />
        </>
    )
}

export default LayoutWrap