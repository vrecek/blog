import React from 'react'
import '../../../css/LayoutFooter.css'
import { ILinksList } from '../../../interfaces/CommonInterfaces'
import LinksList from './LinksList'
import Newsletter from './Newsletter'
import Socials from './Socials'

const LayoutFooter = () => {
    const firstList: ILinksList[][] = [
        [
            { text: 'Links', url: '/', cname: 'header' },
            { text: 'Homepage', url: '/' },
            { text: 'Contact', url: '/contact' }
        ],

        [
            { text: 'User', url: '/', cname: 'header' },
            { text: 'Profile', url: '/profile', },
            { text: 'Sign in', url: '/sign-in', },
            { text: 'Create an account', url: '/register', }
        ]
    ]

    const secondList: ILinksList[][] = [
        [
            { text: 'Articles', url: '/', cname: 'header' },
            { text: 'Popular', url: '/search/type/popular' },
            { text: 'Latest', url: '/search/type/latest' },
        ]
    ]

    return (
        <footer className="layout-footer">

            <LinksList list={firstList} />
            <LinksList list={secondList} />

            <section className="right">

                <Socials />
                <Newsletter />

            </section>

        </footer>
    )
}

export default LayoutFooter