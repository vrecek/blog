import React from 'react'
import { ITitleHeader } from '../../../interfaces/ArticlePageInterfaces'

const TitleAndHeader = ({title, header}: ITitleHeader) => {
    return (
        <>
        
            <h2>{header}</h2>
            <h1>{title}</h1>

        </>
    )
}

export default TitleAndHeader