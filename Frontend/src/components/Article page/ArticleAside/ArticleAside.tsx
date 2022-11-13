import React from 'react'
import RelatedList from './RelatedList'
import '../../../css/ArticleAside.css'
import Icon from '../../Common/Icon'
import { AiOutlineLike } from 'react-icons/ai'
import { BsCalendarDateFill } from 'react-icons/bs'

const ArticleAside = () => {
    
    return (
        <aside className="article-aside">

            <RelatedList />

            <section className="misc-info">

                <div className="icon likes">
                    <Icon><AiOutlineLike /></Icon>
                    999
                </div>

                <div className="icon date">
                    <Icon><BsCalendarDateFill /></Icon>
                    12.12.2022
                </div>

            </section>

        </aside>
    )
}

export default ArticleAside