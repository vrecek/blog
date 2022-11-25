import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import NavigateClass from '../../../functions/NavigateClass'
import Icon from '../../Common/Icon'

const Searchbar = () => {
    const n: NavigateFunction = useNavigate()

    const redirectSearch = (e: React.KeyboardEvent): void => {
        const menu: HTMLElement = (e.target as HTMLInputElement).parentElement!.parentElement!

        NavigateClass.searchNavigateEnter(e, n, '/search/bar/[value]', () => {
            menu.classList.remove('active')
            menu.style.translate = '-105% 0'
        })
    }

    return (
        <div className="searchbar">

            <input onKeyDown={redirectSearch} type='text' spellCheck='false' />
            <Icon><BiSearch /></Icon>

        </div>
    )
}

export default Searchbar