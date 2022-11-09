import React from 'react'
import { IRegisterTextContainer } from '../../../../interfaces/LoginRegisterInterfaces'

const TextContainer = ({text, header}: IRegisterTextContainer) => {
    return (
        <div className="text-container">

            <p className="header">{header}</p>
            <p className="text">{text}</p>

        </div>
    )
}

export default TextContainer