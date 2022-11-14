import React from 'react'

const PasswordDiv = ({label}: {label: string}) => {
    return (
        <div className="password-div">

            <label>{label}</label>
            <input type="password" />

        </div>
    )
}

export default PasswordDiv