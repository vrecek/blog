import React from 'react'
import { IUsernameMail } from '../../../../interfaces/ProfileInterfaces'
import InformationDiv from './InformationDiv'

const UsernameAndMail = ({mail, username}: IUsernameMail) => {
    return (
        <section className="uam">

            <InformationDiv keyName='Username' value={username} />
            <InformationDiv keyName='Mail address' value={mail} />

        </section>
    )
}

export default UsernameAndMail