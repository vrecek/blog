import React from 'react'
import { UserContext } from '../../../../../App'
import UserType from '../../../../../interfaces/UserType'
import FigureImage from '../../../../Common/FigureImage'
import InformationDiv from '../InformationDiv'
import TextInfo from '../TextInfo'
import UsernameAndMail from '../UsernameAndMail'
import blank from '../../../../../images/blank.jpg'

const BasicInformations = () => {
    const user: UserType = React.useContext(UserContext)!
    const {points, username, mail, created, avatar} = user

    const createdStr: string = new Date(created).toLocaleDateString()

    return (
        <section className="basic-informations">

            <TextInfo header='Basic informations' text="Check user's basic profile credentials"/>

            <UsernameAndMail mail={mail} username={username} />

            <section className="idk">

                <InformationDiv keyName='Created' value={createdStr} />
                <InformationDiv keyName='Avatar' value={<FigureImage source={avatar?.url ?? blank} altTxt='Avatar' />} />
                <InformationDiv keyName='Points' value={points} />

            </section>

        </section>
    )
}

export default BasicInformations