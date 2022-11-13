import React from 'react'
import { AiOutlineFieldTime } from 'react-icons/ai'
import Icon from '../../../Common/Icon'
import DateString from './DateString'
import ReadTime from './ReadTime'

const ContentMiscInfo = () => {
    return (
        <section className="content-misc">

            <ReadTime />

            <DateString />

        </section>
    )
}

export default ContentMiscInfo