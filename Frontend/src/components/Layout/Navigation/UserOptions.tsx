import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import Fetches from '../../../functions/Fetches'
import fetchFunction from '../../../functions/fetchFunction'
import { PossibleUser } from '../../../interfaces/UserType'
import Button from '../../Common/Button'

const UserOptions = () => {
    const n: NavigateFunction = useNavigate()
    const user: PossibleUser = React.useContext(UserContext)

    const logoutUser = async (e: React.MouseEvent): Promise<void> => {
        const t: HTMLElement = e.target as HTMLElement
        Fetches.disableButton(t)

        fetchFunction(
            { url: `${process.env.REACT_APP_API_USER_LOGOUT}/${user!._id}`, type: 'POST' },
            { position: 'containerHeight', appendTo: t },

            () => {
                window.location.reload()
            },

            () => {
                Fetches.enableButton(t)
            }
        )
    }

    return (
        <div className="options">

            {
                user
                    ? <>
                        <p onClick={() => n('/profile')} className="profile">Profile</p>
                        <Button action={logoutUser} cname='logout' text='Logout' />
                      </>

                    : <>
                        <Button action={() => n('/sign-in')} cname='signin' text='Sign in' />
                        <Button action={() => n('/register')} cname='joinus' text='Join us' />
                      </>
            }

        </div>
    )
}

export default UserOptions