import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { IRateAndDate } from '../../../interfaces/HomepageInterfaces'
import Icon from '../../Common/Icon'

const RateAndDate = ({rate, date}: IRateAndDate) => {
    return (
        <div className='rate-and-date'>

            <p className="rating">
                <Icon><AiFillLike /></Icon>
                {rate}
            </p>

            <p className="date">Today</p>

        </div>
    )
}

export default RateAndDate