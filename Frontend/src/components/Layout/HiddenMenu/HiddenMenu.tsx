import React from 'react'
import { AiFillFire, AiOutlineFieldTime, AiOutlineMenu } from 'react-icons/ai'
import { BiHome } from 'react-icons/bi'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FiLogIn, FiUserPlus } from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import '../../../css/HiddenMenu.css'
import { ILinksList } from '../../../interfaces/CommonInterfaces'
import { PossibleUser } from '../../../interfaces/UserType'
import Icon from '../../Common/Icon'
import { MdAdminPanelSettings } from 'react-icons/md'
import Searchbar from './Searchbar'

const HiddenMenu = () => {
    const n: NavigateFunction = useNavigate()
    const user: PossibleUser = React.useContext(UserContext)

    const list: ILinksList[] = [
        { text: 'Homepage', url: '/', icon: <BiHome /> },
        { text: 'Sign in', url: '/sign-in', icon: <FiLogIn /> },
        { text: 'Register', url: '/register', icon: <FiUserPlus /> },
        { text: 'Popular', url: '/search/type/popular', icon: <AiFillFire /> },
        { text: 'Latest', url: '/search/type/latest', icon: <AiOutlineFieldTime /> },
        { text: 'Contact', url: '/contact', icon: <BsFillTelephoneForwardFill /> }
    ]

    if(user) {
        list.splice(
            1,
            0,
            { text: 'Profile', url: `/profile`, icon: <CgProfile /> }
        )

        if(user.role === 'admin')
            list.push(
                { text: 'Admin panel', url: `/admin/${process.env.REACT_APP_ADMIN_URL}`, icon: <MdAdminPanelSettings /> }
            )
    }

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

            <Searchbar />

            <ul>

                {
                    list.map((x, i) => (
                        <li onClick={(e) => redirectLink(e, x.url)} key={i}>
                            <Icon>{x.icon!}</Icon>
                            {x.text}
                        </li>
                    ))
                }

            </ul>

        </aside>
    )
}

export default HiddenMenu