import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import '../../../css/HiddenMenu.css'
import Icon from '../../Common/Icon'

const HiddenMenu = () => {
    const expandMenu = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement
        const menu: HTMLElement = t.parentElement!

        menu.classList.toggle('active')

        menu.classList.contains('active')
            ? menu.style.translate = '0 0'
            : menu.style.translate = '-105% 0'
    }

    return (
        <aside className="menu">

            <Icon cname='menu-icon' action={expandMenu}>
                <AiOutlineMenu />
            </Icon>

            <ul>

                <li>Loremipsum</li>
                <li>Loremipsum</li>
                <li>Loremipsum</li>
                <li>Loremipsum</li>
                <li>Loremipsum</li>
                <li>Loremipsum</li>

            </ul>

        </aside>
    )
}

export default HiddenMenu