import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import NavigateClass from '../../functions/NavigateClass'
import Icon from '../Common/Icon'

const Searchbar = () => {
    const n: NavigateFunction = useNavigate()
    
    return (
        <div className="searchbar">

            <input onKeyDown={(e) => NavigateClass.searchNavigateEnter(e, n, '/search/bar/[value]')} type="text" spellCheck='false' />
            <Icon><BiSearch /></Icon>

        </div>
    )
}

export default Searchbar