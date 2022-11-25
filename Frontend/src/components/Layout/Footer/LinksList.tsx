import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ILinksListComponent } from '../../../interfaces/FooterInterfaces'

const LinksList = ({list}: ILinksListComponent) => {
    const n: NavigateFunction = useNavigate()
    
    return (
        <div>

            {
                list.map((x, i) => (
                    <ul key={i}>

                        {
                            x.map((y, j) => (
                                <li onClick={() => n(y.url)} className={y.cname ?? ''} key={j}>

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