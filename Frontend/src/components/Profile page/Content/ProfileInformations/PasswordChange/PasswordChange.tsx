import React from 'react'
import { UserContext } from '../../../../../App'
import AppendResult from '../../../../../functions/AppendText'
import Fetches from '../../../../../functions/Fetches'
import fetchFunction from '../../../../../functions/fetchFunction'
import Button from '../../../../Common/Button'
import TextInfo from '../TextInfo'
import PasswordDiv from './PasswordDiv'

const PasswordChange = () => {
    const userId: string = React.useContext(UserContext)!._id
    const ar: AppendResult = new AppendResult('h6')

    const submitPassword = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const t: HTMLFormElement = e.target as HTMLFormElement
        const elements: HTMLInputElement[] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)

        const [pass, confPass] = elements
                                    .map(x => x.value)


        const btn: HTMLElement = elements.slice(-1)[0]

        const body = {
            pass,
            confPass,
            userId
        }

        await fetchFunction(
            {url: process.env.REACT_APP_API_CHANGE_PASSWORD!, type: 'PATCH', body},
            {position: 'containerWidth', appendTo: t},

            () => {
                ar.setClass = 'true'
                ar.setMessage = 'Successfully changed. You will be logged off.'
                
                window.location.pathname = '/sign-in'
            },

            err => {
                ar.setClass = 'false'
                ar.setMessage = Fetches.returnFetchErrorState(err).msg
            },

            () => {
                ar.appendTo(btn, 3)
            }
        )
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