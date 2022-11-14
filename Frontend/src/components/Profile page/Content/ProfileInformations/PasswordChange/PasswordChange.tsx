import React from 'react'
import Button from '../../../../Common/Button'
import TextInfo from '../TextInfo'
import PasswordDiv from './PasswordDiv'

const PasswordChange = () => {
    /*
    article: comments

    admin: view articles (delete) | create article

    FIN
    */

    const submitPassword = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
    }

    return (
        <section className="change-password">

            <TextInfo header='Change password' text='Edit input fields to change your password' />

            <form onSubmit={submitPassword} className="pass-container">

                <section className="pass-container">

                    <PasswordDiv label='New password' />
                    <PasswordDiv label='Confirm password' />

                </section>

                <Button text='Change password' />

            </form>

        </section>
    )
}

export default PasswordChange