import React from 'react'
import Button from '../../Common/Button'
import InputDiv from '../InputDiv'
import RedirectText from '../RedirectText'
import RememberAndForgot from './Right/RememberAndForgot'

const LoginRight = () => {
    const submitLogin = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
    }

    return (
        <section className="right login-right">

            <h2>Sign in</h2>

            <form onSubmit={submitLogin}>

                <InputDiv label='Username' type='text' />
                <InputDiv additionalToContainer={<RememberAndForgot />} label='Password' type='text' />

                <Button text='Sign in' />

            </form>

            <RedirectText linkText='Create one here' linkUrl='/register' left='No account?' />

        </section>
    )
}

export default LoginRight