import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../Common/Button'

const UserOptions = () => {
    const n: NavigateFunction = useNavigate()

    return (
        <div className="options">

            <Button action={() => n('/sign-in')} cname='signin' text='Sign in' />
            <Button action={() => n('/register')} cname='joinus' text='Join us' />

        </div>
    )
}

export default UserOptions