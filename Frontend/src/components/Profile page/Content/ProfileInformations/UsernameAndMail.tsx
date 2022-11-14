import React from 'react'
import InformationDiv from './InformationDiv'

const UsernameAndMail = () => {
    return (
        <section className="uam">

            <InformationDiv keyName='Username' value='vrecek' />
            <InformationDiv keyName='Mail address' value='vrecekff-ci@outlook.com' />

        </section>
    )
}

export default UsernameAndMail