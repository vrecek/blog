import React from 'react'
import '../../../css/LayoutFooter.css'
import { ILinksList } from '../../../interfaces/FooterInterfaces'
import LinksList from './LinksList'
import Newsletter from './Newsletter'
import Socials from './Socials'

const LayoutFooter = () => {
    const firstList: ILinksList[][] = [
        [
            { text: 'Links', url: '/', cname: 'header' },
            { text: 'Homepage', url: '/' }
        ],

        [
            { text: 'User', url: '/', cname: 'header' },
            { text: 'Profile', url: '/', },
            { text: 'Sign in', url: '/', },
            { text: 'Create an account', url: '/', }
        ]
    ]

    const secondList: ILinksList[][] = [
        [
            { text: 'Articles', url: '/', cname: 'header' },
            { text: 'Popular', url: '/' },
            { text: 'Latest', url: '/' },
            { text: 'NSFW', url: '/' }
        ],

        [
            { text: 'Misc', url: '/', cname: 'header' },
            { text: 'Contact', url: '/', },
            { text: 'About', url: '/', },
            { text: 'Privacy policy', url: '/', }
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