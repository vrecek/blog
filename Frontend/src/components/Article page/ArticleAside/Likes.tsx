import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import Client, { StrUN } from '../../../functions/Client'
import fetchFunction from '../../../functions/fetchFunction'
import { ILikes } from '../../../interfaces/ArticlePageInterfaces'
import Icon from '../../Common/Icon'

const Likes = ({details, id}: ILikes) => {
    const userId: StrUN = React.useContext(UserContext)?._id
    const n: NavigateFunction = useNavigate()

    const hasLiked: boolean = Client.hasUserActed(userId, details.whoRated)

    const likeArticle = async (e: React.MouseEvent): Promise<void> => {
        if(!userId) {
            n('/sign-in')

            return
        }

        const t: HTMLElement = e.target as HTMLElement
        const p: HTMLElement = t.children[1] as HTMLElement

        if(t.classList.contains('true')) {
            t.className = 'icon likes'
            p.textContent = Client.returnIncrementedStringNumber(p.textContent!, -1)

        }else {
            t.className = 'icon likes true'
            p.textContent = Client.returnIncrementedStringNumber(p.textContent!, 1)
        }

        await fetchFunction(
            {url: process.env.REACT_APP_API_ARTICLE_RATE!, type: 'PATCH', body: { userId, articleId: id }},
            {},
            () => {},
            () => {}
        )
    }

    return (
        <div onClick={likeArticle} className={`icon likes ${hasLiked.toString()}`}>

            <Icon><AiOutlineLike /></Icon>
            <p>{details.num}</p>

        </div>
    )
}

export default Likes