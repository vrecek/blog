import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { MdArticle } from 'react-icons/md'
import {SiWebcomponentsdotorg} from 'react-icons/si'
import RegisterProfit from './Left/RegisterProfit'

const RegisterLeft = () => {
    return (
        <article className="left register-left">

            <h1>What are the profits of being registered?</h1>

            <section className="profits">

                <RegisterProfit 
                    header='Rate articles'
                    text='Be able to rate articles, improving their further quality'
                    icon={<AiOutlineLike />}
                />

                <RegisterProfit 
                    header='Comment the articles'
                    text='Write your thoughts about the article you have just read'
                    icon={<MdArticle />}
                />

                <RegisterProfit 
                    header='Help improving this website'
                    text='When registering, you are helping us improving and expanding our blog'
                    icon={<SiWebcomponentsdotorg />}
                />

            </section>

        </article>
    ) 
}

export default RegisterLeft