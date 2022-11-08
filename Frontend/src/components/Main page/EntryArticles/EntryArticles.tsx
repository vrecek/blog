import React from 'react'
import '../../../css/EntryArticles.css'
import Icon from '../../Common/Icon'
import {ImParagraphLeft} from 'react-icons/im'
import LatestSection from './LatestSection/LatestSection'
import PopularSection from './PopularSection/PopularSection'

const EntryArticles = () => {
    return (
        <section className="entry-articles">

            <PopularSection />
            <LatestSection />

            <Icon cname='abs'><ImParagraphLeft /></Icon>

        </section>
    )
}

export default EntryArticles