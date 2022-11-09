import React from 'react'
import { BiPhone } from 'react-icons/bi'
import Icon from '../../Common/Icon'

const Tile = () => {
    return (
        <div className="tile">

            <div>
                <Icon><BiPhone /></Icon>
            </div>

            <p className="header">Lorem Ipsum</p>
            <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sunt.</p>

        </div>
    )
}

export default Tile