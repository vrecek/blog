import React from 'react'
import InputDiv from '../InputDiv'
import RedirectText from '../RedirectText'
import ReCAPTCHA from 'react-google-recaptcha'
import Button from '../../Common/Button'
import fetchFunction from '../../../functions/fetchFunction'
import AppendResult from '../../../functions/AppendText'
import Fetches from '../../../functions/Fetches'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import PasswordToggler from '../PasswordToggler'

const RegisterRight = () => {
    const captchaRef = React.useRef<any>(null)
    const n: NavigateFunction = useNavigate()

    const ar: AppendResult = new AppendResult('h6')

    const registerSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const t: HTMLFormElement = e.target as HTMLFormElement
    
        const elements: HTMLInputElement[] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)
        elements.pop()

        await fetchFunction(
            { url: process.env.REACT_APP_API_USER_REGISTER!, type: 'POST', body: elements.map(x => x.value) }, 
            { position: 'containerWidth', appendTo: t.parentElement! },

            () => {
                ar.setClass = 'true'
                ar.setMessage = 'Successfully created account. You can log in now'

                for(let x of elements) x.value = ''

                setTimeout(() => n('/sign-in'), 1500)
            },

            (err) => {
                ar.setClass = 'false'
                ar.setMessage = Fetches.returnFetchErrorState(err).msg
            },

            () => { 
                ar.appendTo(t, 3) 
                captchaRef.current!.reset()
            }
        )
    }

    return (
        <section className="right register-right">

            <h2>Register</h2>

            <form onSubmit={registerSubmit}>

                <InputDiv label='Username' type='text' />
                <InputDiv label='Mail address' type='text' />

                <div className="small-wrap">

                    <InputDiv additionalToInput={<PasswordToggler />} divClass='small' label='Password' type='password' />
                    <InputDiv additionalToInput={<PasswordToggler />} divClass='small' label='Confirm password' type='password' />

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