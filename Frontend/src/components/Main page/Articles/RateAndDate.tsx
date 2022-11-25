import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import Client from '../../../functions/Client'
import { IRateAndDate } from '../../../interfaces/HomepageInterfaces'
import Icon from '../../Common/Icon'

const RateAndDate = ({likes, posted}: IRateAndDate) => {
    return (
        <div className='rate-and-date'>

            <p className="rating">
                <Icon><AiFillLike /></Icon>
                {likes.num}
            </p>

            <p className="date">{Client.numberToDateString(posted)}</p>

        </div>
    )
}

export default RateAndDate