import React from 'react'
import { UserContext } from '../../../../App'
import AppendResult from '../../../../functions/AppendText'
import Fetches from '../../../../functions/Fetches'
import fetchFunction from '../../../../functions/fetchFunction'
import Button from '../../../Common/Button'

const ProfileDelete = () => {
    const userId: string = React.useContext(UserContext)!._id

    const ar: AppendResult = new AppendResult('h6')

    const deleteAccount = async (e: React.MouseEvent): Promise<void> => {
        const t: HTMLElement = e.target as HTMLElement
        const container: HTMLElement = t.parentElement as HTMLElement

        Fetches.disableButton(t)

        await fetchFunction(
            {url: `${process.env.REACT_APP_API_USER_DELETE}/${userId}`, type: 'DELETE'},
            {position: 'containerWidth', appendTo: container},

            () => {
                window.location.pathname = '/'
            },

            err => {
                Fetches.enableButton(t)

                ar.setClass = 'error'
                ar.setMessage = Fetches.returnFetchErrorState(err).msg
                ar.appendTo(t, 2.5)
            }
        )
    }

    return (
        <section className="content profile-delete">

            <h1>Delete profile</h1>

            <p>Are you sure you want to delete your account?</p>
            <p className='confirm'>This process cannot be reversed</p>

            <Button action={deleteAccount} text='Delete account' />

        </section>
    )
}

export default ProfileDelete