import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Icon from '../Common/Icon'

const Searchbar = () => {
    return (
        <div className="searchbar">

            <input type="text" spellCheck='false' />
            <Icon><BiSearch /></Icon>

        </div>
    )
}

export default Searchbar