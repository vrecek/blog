import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import blank from '../../../../images/blank.jpg'
import Button from '../../../Common/Button'
import '../../../../css/CommentForm.css'
import fetchFunction from '../../../../functions/fetchFunction'
import Client, { Inputs, StrUN } from '../../../../functions/Client'
import { UserContext } from '../../../../App'
import Fetches from '../../../../functions/Fetches'

const CommentForm = ({id}: {id: string}) => {
    const userId: StrUN = React.useContext(UserContext)?._id
    const box = new Client.TextBox()
    box.setDefaultStyles('fixed-center-top-black-textsize')
    
    const submitComment = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const t: HTMLFormElement = e.target as HTMLFormElement
        const text: string = Array.from(t.elements as Inputs)[0].value

        Fetches.disableButton(t)

        const body = {
            authorId: userId,
            articleId: id,
            text
        }

        await fetchFunction(
            {url: process.env.REACT_APP_API_ARTICLE_COMMENT!, type: 'PUT', body},
            {position: 'containerHeight', appendTo: t},

            () => {
                box.setMessage = 'Successfully posted'
            },

            err => {
                Fetches.enableButton(t)

                box.setMessage = Fetches.returnFetchErrorState(err).msg
            },

            () => {
                box.createElements().appendBox(t, 2000)
            }
        )
    }

    return (
        <form onSubmit={submitComment} className='article-comment-form'>

            <FigureImage source={blank} altTxt='Avatar' />

            <div>

                <textarea></textarea>
                <Button text='Submit' />

            </div>          

        </form>
    )
}

export default CommentForm