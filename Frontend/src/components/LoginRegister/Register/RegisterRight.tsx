import React from 'react'
import InputDiv from '../InputDiv'
import RedirectText from '../RedirectText'
import ReCAPTCHA from 'react-google-recaptcha'
import Button from '../../Common/Button'

const RegisterRight = () => {
    const captchaRef = React.useRef<any>(null)

    const registerSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
    }

    return (
        <section className="right register-right">

            <h2>Register</h2>

            <form onSubmit={registerSubmit}>

                <InputDiv label='Username' type='text' />
                <InputDiv label='Mail address' type='text' />

                <div className="small-wrap">

                    <InputDiv divClass='small' label='Password' type='password' />
                    <InputDiv divClass='small' label='Confirm password' type='password' />

                </div>

                <ReCAPTCHA 
                    sitekey={process.env.REACT_APP_RECAPTCHA_KEY!} 
                    ref={captchaRef} 
                />

                <Button text='Register' />

            </form>

            <RedirectText left='Got account?' linkText='Sign in here' linkUrl='/sign-in' />

        </section>
    )
}

export default RegisterRight