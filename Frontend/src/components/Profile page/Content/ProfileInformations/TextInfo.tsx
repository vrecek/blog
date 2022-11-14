import React from 'react'
import { ITextInfo } from '../../../../interfaces/ProfileInterfaces'

const TextInfo = ({header, text}: ITextInfo) => {
    return (
        <div className='text-info'>
        
            <h2>{header}</h2>
            <p className="info">{text}</p>

        </div>
    )
}

export default TextInfo