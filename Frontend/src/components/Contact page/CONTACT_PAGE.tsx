import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import ContactForm from './ContactForm/ContactForm'
import ContactTiles from './ContactTiles/ContactTiles'
import '../../css/ContactPage.css'

const CONTACT_PAGE = () => {
    window.scrollTo(0, 0)
    
    return (
        <LayoutWrap>

            <main className="contact-page">

                <ContactTiles />
                <ContactForm />

            </main>

        </LayoutWrap>
    )
}

export default CONTACT_PAGE