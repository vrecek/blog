import React from 'react'
import ArticleImageSection from './ImageSection/ArticleImageSection'
import ContentMiscInfo from './ContentMisc/ContentMiscInfo'
import FinalSection from './FinalSection'
import TitleAndHeader from './TitleAndHeader'

const ArticleContent = () => {
    return (
        <section className="main-container">

            <article className="content">

                <ArticleImageSection />

                <ContentMiscInfo />

                <TitleAndHeader />
                
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia, sit labore velit quod debitis qui mollitia dicta ipsa sunt veniam fugiat quasi porro omnis quisquam deserunt placeat delectus esse. <span className="header">Conqesatur elit</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="box">AAA iBBB
                    CCC
                    amet</span> 
                    <img src='http://localhost:3000/static/media/header.d57c9e6930442930c8a6.jpg' loading='lazy' alt='Image' />
                    Beatae ab at ipsam nemo <a href='/' className="link">veritatis</a> dolor delectus, inventore vitae cum harum accusantium ducimus aliquid accusamus possimus dolores quo. Possimus, sequi similique.
                </p>

            </article>

            <FinalSection />

        </section>
    )
}

export default ArticleContent