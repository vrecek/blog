import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsPen } from 'react-icons/bs'
import { FaGithubAlt } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { ITile } from '../../../interfaces/ContactPageInterfaces'
import Tile from './Tile'

const ContactTiles = () => {
    const tiles: ITile[] = [
        { icon: <BiPhone />, header: 'Contact via phone', text: '918273645' },
        { icon: <HiOutlineMail />, header: 'Contact via mail', text: 'vrecek-ffci@outlook.com' },
        { icon: <BsPen />, header: 'Conact us using form', text: 'If you are logged, you can text us using form below' },
        { icon: <FaGithubAlt />, header: 'See my Github profile', text: 'github.com/vrecek' }
    ]

    return (
        <section className="tiles">

            {
                tiles.map((x, i) => (
                    <Tile
                        key={i}
                        icon={x.icon}
                        header={x.header}
                        text={x.text}
                    />
                ))
            }

        </section>
    )
}

export default ContactTiles