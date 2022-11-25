import React from 'react'
import AvatarChange from './AvatarChange/AvatarChange'
import BasicInformations from './BasicInformations/BasicInformations'
import PasswordChange from './PasswordChange/PasswordChange'

const ProfileInformations = () => {    
    return (
        <section className="content profile-informations">

            <h1>Profile informations</h1>

            <BasicInformations />

            <PasswordChange />

            <AvatarChange />

        </section>
    )
}

export default ProfileInformations