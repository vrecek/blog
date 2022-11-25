import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ICategoryObject } from '../../../../interfaces/HomepageInterfaces'
import Icon from '../../../Common/Icon'

const CategoryInfo = ({category}: {category: ICategoryObject}) => {
    const n: NavigateFunction = useNavigate()
    
    return (
        <div onClick={() => n(`/search/category/${category.url}`)} className="container-category">

            <p className='text'>{category.name}</p>

            <p className='redirect'>
                See more
                <Icon><BsArrowRight /></Icon>
            </p>

        </div>
    )
}

export default CategoryInfo