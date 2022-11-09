import React from 'react'
import { IRegisterProfit } from '../../../../interfaces/LoginRegisterInterfaces'
import IconContainer from './IconContainer'
import TextContainer from './TextContainer'

const RegisterProfit = ({icon, header, text}: IRegisterProfit) => {
    return (
        <div className="reg-profit">

            <IconContainer icon={icon} />

            <TextContainer header={header} text={text} />

        </div>
    )
}

export default RegisterProfit