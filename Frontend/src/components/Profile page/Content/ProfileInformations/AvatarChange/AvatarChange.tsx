import React from 'react'
import { UserContext } from '../../../../../App'
import AppendResult from '../../../../../functions/AppendText'
import Fetches from '../../../../../functions/Fetches'
import fetchFunction from '../../../../../functions/fetchFunction'
import Button from '../../../../Common/Button'
import TextInfo from '../TextInfo'

const AvatarChange = () => {
    const userId: string = React.useContext(UserContext)!._id
    const ar: AppendResult = new AppendResult('h6')

    const submitAvatar = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const t: HTMLFormElement = e.target as HTMLFormElement

        const elements: HTMLInputElement[] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)
        const btn: HTMLElement = elements.slice(-1)[0]
        
        ar.setClass = 'false'
        ar.setMessage = 'Cannot upload files on Heroku'
        ar.appendTo(btn, 3)
        return

        const fd: FormData = new FormData()
        fd.append('avatar', elements[0].files![0])
        fd.append('userId', userId)

        await fetchFunction(
            {url: process.env.REACT_APP_API_CHANGE_AVATAR!, type: 'PATCH', body: fd, uploadType: 'multer'},
            {position: 'containerHeight', appendTo: t},

            () => {
                ar.setClass = 'true'
                ar.setMessage = 'Successfully changed avatar'

                window.location.reload()
            },

            err => {
                ar.setClass = 'false'
                ar.setMessage = Fetches.returnFetchErrorState(err).msg
            },

            () => {
                ar.appendTo(btn, 3)
            }
        )
    }

    return (
        <section className="change-avatar">

            <TextInfo header='Change avatar' text='Allowed png, jpg, jpeg up to 1 mb' />

            <form onSubmit={submitAvatar}>

                <input type='file' />
                <Button text='Change avatar' />

            </form>

        </section>
    )
}

export default AvatarChange