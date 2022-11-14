import React from 'react'
import { IProfileInfoDiv } from '../../../../interfaces/ProfileInterfaces'

const InformationDiv = ({keyName, value, cname}: IProfileInfoDiv) => {
    return (
        <div className={`user-info ${cname ?? ''}`}>

            <p className="key">{keyName}</p>
            <p className="value">{value}</p>

        </div>
    )
}

export default InformationDiv