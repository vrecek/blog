import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { BsTelephoneForwardFill } from 'react-icons/bs'
import {FiUserPlus} from 'react-icons/fi'
import { RiArticleLine } from 'react-icons/ri'
import '../../../css/HomepageHeader.css'
import { IHeaderTile } from '../../../interfaces/HomepageInterfaces'
import HeaderTile from './HeaderTile'
import HeaderText from './Tiles/HeaderText'

const HomepageHeader = () => {
    const tiles: IHeaderTile[] = [
        {url: '/contact', text: 'Have you got any problems? Contact us if you have encountered any. We are available full time.', icon: <BsTelephoneForwardFill />},
        {url: '/sign-in', text: 'Log in if you have the account. You will be able to rate various articles and to contact us through this website.', icon: <BiLogIn />},
        {url: '/register', text: 'Create your account. It is 100% free and you will get many benefits if you decide to register in here.', icon: <FiUserPlus />},
        {text: 'Read articles about various topics. These are created with a legit informations. Give it a try and find something interesting for you.', icon: <RiArticleLine />}
    ]

    return (
        <header className="homepage-header">

            <HeaderText />

            <section className="tiles">

                {
                    tiles.map((x, i) => (
                        <HeaderTile
                            key={i}
                            text={x.text}
                            url={x.url}
                            icon={x.icon}
                        />
                    ))
                }

            </section>

        </header>
    )
}

export default HomepageHeader