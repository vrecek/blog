import React from 'react'
import '../../../css/EntryArticles.css'
import Icon from '../../Common/Icon'
import {ImParagraphLeft} from 'react-icons/im'
import LatestSection from './LatestSection/LatestSection'
import PopularSection from './PopularSection/PopularSection'
import { IEntryARticles } from '../../../interfaces/HomepageInterfaces'

const EntryArticles = ({popular, latest}: IEntryARticles) => {
    return (
        <section className="entry-articles">

            <PopularSection popular={popular} />
            <LatestSection latest={latest} />

            <Icon cname='abs'><ImParagraphLeft /></Icon>

        </section>
    )
}

export default EntryArticles