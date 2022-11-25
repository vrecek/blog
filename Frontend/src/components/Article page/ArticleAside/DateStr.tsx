import React from 'react'
import { BsCalendarDateFill } from 'react-icons/bs'
import { IChildren } from '../../../interfaces/CommonInterfaces'
import Icon from '../../Common/Icon'

const DateStr = ({children}: IChildren<number>) => {
    return (
        <div className="icon date">

            <Icon><BsCalendarDateFill /></Icon>
            {new Date(children).toLocaleDateString()}

        </div>
    )
}

export default DateStr