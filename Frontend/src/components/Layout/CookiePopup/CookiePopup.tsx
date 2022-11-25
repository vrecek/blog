import React from 'react'
import '../../../css/CookiePopup.css'
import FigureImage from '../../Common/FigureImage'
import image from '../../../images/ck.png'
import Button from '../../Common/Button'
import fetchFunction from '../../../functions/fetchFunction'

const CookiePopup = ({setCk}: {setCk: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const confirmCookies = async (e: React.MouseEvent): Promise<void> => {
        const t: HTMLElement = e.target as HTMLElement

        await fetchFunction(
            {url: process.env.REACT_APP_API_OTHER_COOKIE_CONFIRM!, type: 'POST'},
            {position: 'containerWidth', appendTo: t},

            () => setCk(true),

            () => {}
        )
    }

    return (
        <section className="cookie-popup">

            <section className="content">

                <FigureImage source={image} altTxt='Cookie' />

                <p className="header">We're using cookies</p>
                <p className='text'>We are using basic and necessary cookies only for page's functionality. Nothing more.</p>

                <Button action={confirmCookies} text='I understand' />

            </section>

        </section>
    )
}

export default CookiePopup