import React from 'react'
import BasicInformations from './BasicInformations/BasicInformations'
import PasswordChange from './PasswordChange/PasswordChange'

const ProfileInformations = () => {
    return (
        <section className="content profile-informations">

            <h1>Profile informations</h1>

            <BasicInformations />

            <PasswordChange />

        </section>
    )
}

export default ProfileInformations