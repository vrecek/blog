import React from 'react'
import { IRegisterIconContainer } from '../../../../interfaces/LoginRegisterInterfaces'
import Icon from '../../../Common/Icon'

const IconContainer = ({icon}: IRegisterIconContainer) => {
    return (
        <div className="icon-container">

            <Icon>{icon}</Icon>

        </div>
    )
}

export default IconContainer