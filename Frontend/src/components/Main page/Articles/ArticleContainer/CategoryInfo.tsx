import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Icon from '../../../Common/Icon'

const CategoryInfo = ({category}: {category: string}) => {
    return (
        <div className="container-category">

            <p className='text'>{category}</p>

            <p className='redirect'>
                See more
                <Icon><BsArrowRight /></Icon>
            </p>

        </div>
    )
}

export default CategoryInfo