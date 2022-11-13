import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ILinksList } from '../../../interfaces/FooterInterfaces'

const RelatedList = () => {
    const n: NavigateFunction = useNavigate()

    const list: ILinksList[] = [
        { text: 'Related topics', cname: 'disabled', url: '/' },
        { text: 'Dolorem conqestur eit how to lorem ipsyum', url: '/' },
        { text: 'Dolorem conqestur eit rcreating in a ss ss', url: '/' },
        { text: 'Dolorem conqestur eit', url: '/' },
        { text: 'Dolorem conqestur eit', url: '/' },
        { text: 'Dolorem conqestur eit', url: '/' }
    ]

    return (
        <ul>

            {
                list.map((x, i) => (
                    <li key={i} onClick={() => n(x.url)} className={x.cname ?? ''}>
                        {x.text}
                    </li>
                ))
            }

        </ul>
    )
}

export default RelatedList