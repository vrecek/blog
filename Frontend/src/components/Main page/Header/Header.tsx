import React from 'react'
import '../../../css/Header.css'
import Icon from '../../Common/Icon'
import {ImParagraphLeft} from 'react-icons/im'
import LatestSection from './LatestSection/LatestSection'
import PopularSection from './PopularSection/PopularSection'

const Header = () => {
    return (
        <header className="homepage-header">

            <PopularSection />
            <LatestSection />

            <Icon cname='abs'><ImParagraphLeft /></Icon>

        </header>
    )
}

export default Header