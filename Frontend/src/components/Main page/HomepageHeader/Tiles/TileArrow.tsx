import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ITileArrow } from '../../../../interfaces/HomepageInterfaces'
import Icon from '../../../Common/Icon'

const TileArrow = ({url}: ITileArrow) => {
    const n: NavigateFunction = useNavigate()

    return (
        <div onClick={() => n(url!)} className="arrow">

            See more
            <Icon><BsArrowRight /></Icon>

        </div>
    )
}

export default TileArrow