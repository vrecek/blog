import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import '../../../css/HiddenMenu.css'
import { ILinksList } from '../../../interfaces/FooterInterfaces'
import Icon from '../../Common/Icon'

const HiddenMenu = () => {
    const n: NavigateFunction = useNavigate()
    
    const list: ILinksList[] = [
        { text: 'Loremipsum', url: '/' },
        { text: 'Loremipsum', url: '/' },
        { text: 'Loremipsum', url: '/' },
        { text: 'Loremipsum', url: '/' },
        { text: 'Loremipsum', url: '/' },
        { text: 'Loremipsum', url: '/' },
        { text: 'Admin panel', url: `/admin/${process.env.REACT_APP_ADMIN_URL}` }
    ]

    const redirectLink = (e: React.MouseEvent, url: string): void => {
        const menu: HTMLElement = (e.target as HTMLElement).parentElement!.parentElement!

        menu.classList.remove('active')
        menu.style.translate = '-105% 0'

        n(url)
    }

    const hideMenu = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement
        const menu: HTMLElement = t.parentElement!

        menu.classList.toggle('active')

        menu.classList.contains('active')
            ? menu.style.translate = '0 0'
            : menu.style.translate = '-105% 0'
    }


    return (
        <aside className="menu">

            <Icon cname='menu-icon' action={hideMenu}>
                <AiOutlineMenu />
            </Icon>

            <ul>

                {
                    list.map((x, i) => (
                        <li onClick={(e) => redirectLink(e, x.url)} key={i}>
                            {x.text}
                        </li>
                    ))
                }

            </ul>

        </aside>
    )
}

export default HiddenMenu