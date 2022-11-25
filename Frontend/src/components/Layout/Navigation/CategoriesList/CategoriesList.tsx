import React from 'react'
import Icon from '../../../Common/Icon'
import {RiArrowDropDownLine} from 'react-icons/ri'
import CategoriesMenu from './CategoriesMenu'
import '../../../../css/CategoriesMenu.css'
import Client from '../../../../functions/Client'

const CategoriesList = () => {
    const dd = new Client.DropDown()

    const toggleDropdown = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement
        const menu: HTMLElement = t.parentElement!.children[1] as HTMLElement
        const arrow: HTMLElement = t.children[0] as HTMLElement

        dd.switchActive()
        dd.rotateArrow(arrow)

        dd.getActive
            ? dd.expandMenu(300, menu)
            : dd.shrinkMenu(300)
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