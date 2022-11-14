import React from 'react'
import Button from '../../../Common/Button'

const ProfileDelete = () => {
    return (
        <section className="content profile-delete">

            <h1>Delete profile</h1>

            <p>Are you sure you want to delete your account?</p>
            <p>This process cannot be reversed</p>

            <Button text='Delete account' />

        </section>
    )
}

export default ProfileDelete