import React from 'react'
import { Link } from 'react-router-dom'
import { IRedirectText } from '../../interfaces/LoginRegisterInterfaces'

const RedirectText = ({left, linkText, linkUrl}: IRedirectText) => {
    return (
        <p className="redirect-para">

            {left} <Link to={linkUrl}>{linkText}</Link>

        </p>
    )
}

export default RedirectText