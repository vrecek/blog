import React from 'react'
import AppendResult from '../../../functions/AppendText'
import Fetches from '../../../functions/Fetches'
import fetchFunction from '../../../functions/fetchFunction'
import Button from '../../Common/Button'
import InputDiv from '../InputDiv'
import PasswordToggler from '../PasswordToggler'
import RedirectText from '../RedirectText'
import RememberAndForgot from './Right/RememberAndForgot'

const LoginRight = () => {
    const ar: AppendResult = new AppendResult('h6')

    const submitLogin = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const t: HTMLFormElement = e.target as HTMLFormElement

        const elements: HTMLInputElement[] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)
        elements.pop()
        
        const mapElems: (string|boolean)[] = elements.map(x => x.type === 'checkbox' ? x.checked : x.value)
        const body = {
            username: mapElems[0],
            password: mapElems[1],
            checked: mapElems[2]
        }

        await fetchFunction(
            { url: process.env.REACT_APP_API_USER_SIGNIN!, type: 'POST', body },
            { position: 'containerWidth', appendTo: t.parentElement! },

            () => {
                ar.setClass = 'true'
                ar.setMessage = 'Successfully logged in'

                for(let x of elements) x.value = ''

                setTimeout(() => window.location.pathname = '/', 1500)
            },

            (err) => {
                ar.setClass = 'false'
                ar.setMessage = Fetches.returnFetchErrorState(err).msg
            },

            () => {
                ar.appendTo(t, 3) 
            }
        )
    }

    return (
        <section className="right login-right">

            <h2>Sign in</h2>

            <form onSubmit={submitLogin}>

                <InputDiv label='Username' type='text' />
                <InputDiv 
                    additionalToContainer={<RememberAndForgot />} 
                    additionalToInput={<PasswordToggler />}
                    label='Password' 
                    type='password' 
                />

                <Button text='Sign in' />

            </form>

            <RedirectText linkText='Create one here' linkUrl='/register' left='No account?' />

        </section>
    )
}

export default LoginRight