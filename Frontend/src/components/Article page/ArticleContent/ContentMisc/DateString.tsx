import React from 'react'
import { AiOutlineFieldTime } from 'react-icons/ai'
import Client from '../../../../functions/Client'
import { IDateString } from '../../../../interfaces/ArticlePageInterfaces'
import Icon from '../../../Common/Icon'

const DateString = ({postedDate}: IDateString) => {
    return (
        <div>
            
            <Icon><AiOutlineFieldTime /></Icon>
            {Client.numberToDateString(postedDate)}

        </div>
    )
}

export default DateString