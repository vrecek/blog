import React from 'react'
import { MdFacebook } from 'react-icons/md'
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {BsTwitch} from 'react-icons/bs'
import Icon from '../../Common/Icon'

const Socials = () => {
    return (
        <div className="icons">

            <p className="header">Socials</p>

            <div>

                <Icon><MdFacebook /></Icon>
                <Icon action={() => window.open('https://github.com/vrecek', '_blank')}><AiFillGithub /></Icon>
                <Icon><AiFillInstagram /></Icon>
                <Icon><BsTwitch /></Icon>

            </div>

        </div>
    )
}

export default Socials