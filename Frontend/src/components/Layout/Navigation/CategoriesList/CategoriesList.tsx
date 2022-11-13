import React from 'react'
import Icon from '../../../Common/Icon'
import {RiArrowDropDownLine} from 'react-icons/ri'
import CategoriesMenu from './CategoriesMenu'
import '../../../../css/CategoriesMenu.css'
import DropDown from '../../../../functions/DropdownClass'

const CategoriesList = () => {
    const dd: DropDown = new DropDown()

    const toggleDropdown = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement
        const menu: HTMLElement = t.parentElement!.children[1] as HTMLElement
        const arrow: HTMLElement = t.children[0] as HTMLElement

        dd.switchActive()
        dd.rotateArrow(arrow)

        if(dd.getActive) {
            t.classList.add('active')
            dd.expandMenu(.3, menu)

            return
        }

        t.classList.remove('active')
        dd.shrinkMenu(.3)
    }

    return (
        <li className='layout-categories-menu'>

            <p className='list-p' onClick={toggleDropdown}>
                Categories
                <Icon cname='arrow-dd'><RiArrowDropDownLine /></Icon>
            </p>

            <CategoriesMenu />

        </li>
    )
}

export default CategoriesList