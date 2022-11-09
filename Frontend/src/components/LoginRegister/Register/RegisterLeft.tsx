import React from 'react'
import { MdArticle } from 'react-icons/md'
import RegisterProfit from './Left/RegisterProfit'

const RegisterLeft = () => {
    return (
        <article className="left register-left">

            <h1>What are the profits of being registered?</h1>

            <section className="profits">

                <RegisterProfit 
                    header='Lorem ipsum dolor'
                    text='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent tincidunt vehicula tincidunt. Morbi sit amet ipsum '
                    icon={<MdArticle />}
                />

                <RegisterProfit 
                    header='Lorem ipsum dolor'
                    text='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent tincidunt vehicula tincidunt. Morbi sit amet ipsum '
                    icon={<MdArticle />}
                />

                <RegisterProfit 
                    header='Lorem ipsum dolor'
                    text='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent tincidunt vehicula tincidunt. Morbi sit amet ipsum '
                    icon={<MdArticle />}
                />

            </section>

        </article>
    ) 
}

export default RegisterLeft