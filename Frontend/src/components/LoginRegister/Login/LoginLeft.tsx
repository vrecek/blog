import React from 'react'
import FigureImage from '../../Common/FigureImage'
import image from '../../../images/loginImage.png'
import LoginLeftText from './Left/LoginLeftText'

const LoginLeft = () => {
    return (
        <article className="left login-left">

            <FigureImage source={image} altTxt='Greeting' />

            <LoginLeftText />

        </article>
    )
}

export default LoginLeft