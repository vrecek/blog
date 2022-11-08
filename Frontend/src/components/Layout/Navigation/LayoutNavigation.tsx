import React from 'react'
import '../../../css/LayoutNavigation.css'
import LinksList from './LinksList'
import Logo from './Logo'
import UserOptions from './UserOptions'

const LayoutNavigation = () => {
    return (
        <nav className="layout-navigation">

            <div className="wrap">

                <Logo />
                <LinksList />

            </div>

            <UserOptions />

        </nav>
    )
}

export default LayoutNavigation