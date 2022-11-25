import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Client from '../../functions/Client'
import ErrorLocationState from '../../interfaces/ErrorPageInterfaces'
import Button from '../Common/Button'

const InformationContainer = ({code, msg}: ErrorLocationState) => {
    const n: NavigateFunction = useNavigate()

    return (
        <article className="informations">

            <h1 className="code">{code}</h1>
            <h2 className="def">{Client.getDefaultMsgFromErrorCode(code)}</h2>

            <p>{msg}</p>

            <Button action={() => n('/', { replace: true })} text="Back to homepage" />

        </article>
    )
}

export default InformationContainer