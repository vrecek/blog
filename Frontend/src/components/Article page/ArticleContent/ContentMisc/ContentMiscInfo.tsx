import React from 'react'
import { IMiscInformations } from '../../../../interfaces/ArticlePageInterfaces'
import DateString from './DateString'
import ReadTime from './ReadTime'

const ContentMiscInfo = ({postedDate, textLen}: IMiscInformations) => {
    return (
        <section className="content-misc">

            <ReadTime textLen={textLen} />

            <DateString postedDate={postedDate} />

        </section>
    )
}

export default ContentMiscInfo