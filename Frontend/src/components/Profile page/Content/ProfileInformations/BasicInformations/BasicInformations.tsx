import React from 'react'
import InformationDiv from '../InformationDiv'
import TextInfo from '../TextInfo'
import UsernameAndMail from '../UsernameAndMail'

const BasicInformations = () => {
    return (
        <section className="basic-informations">

            <TextInfo header='Basic informations' text="Check user's basic profile credentials"/>

            <UsernameAndMail />

            <section className="idk">

                <InformationDiv keyName='Lorem ipsum' value='Dolorem' />
                <InformationDiv keyName='Lorem ipsum' value='Dolorem' />
                <InformationDiv keyName='Lorem ipsum' value='Dolorem' />

            </section>

        </section>
    )
}

export default BasicInformations