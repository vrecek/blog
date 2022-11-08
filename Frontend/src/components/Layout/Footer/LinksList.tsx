import React from 'react'
import { ILinksListComponent } from '../../../interfaces/FooterInterfaces'

const LinksList = ({list}: ILinksListComponent) => {
    return (
        <div>

            {
                list.map((x, i) => (
                    <ul key={i}>

                        {
                            x.map((y, j) => (
                                <li className={y.cname ?? ''} key={j}>

                                    {y.text}

                                </li>
                            ))
                        }

                    </ul>
                ))
            }

        </div>
    )
}

export default LinksList