import React from 'react'
import Icon from '../../Common/Icon'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

const Logo = () => {
    const n: NavigateFunction = useNavigate()

    const expandMenu = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement
        const app: HTMLElement = document.body.children[1].children[0] as HTMLElement 
        const menu: HTMLElement = app.children[app.children.length - 1] as HTMLElement

        menu.classList.toggle('active')

        menu.classList.contains('active')
            ? menu.style.translate = '0 0'
            : menu.style.translate = '-105% 0'
    }

    return (
        <div className="logo">

            <Icon action={expandMenu}><AiOutlineMenu /></Icon>
            <p onClick={() => n('/')}>Myblogs</p>

        </div>
    )
}

export default Logo