import React from 'react'
import '../../css/ArticlePage.css'
import { defaultStateLoadHook, StateLoadingHook } from '../../interfaces/CommonInterfaces'
import LayoutWrap from '../Layout/LayoutWrap'
import ArticleAside from './ArticleAside/ArticleAside'
import ArticleContent from './ArticleContent/ArticleContent'
import fetchFunction from '../../functions/fetchFunction'
import { Location, NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import Fetches from '../../functions/Fetches'
import { StateType } from '../../interfaces/ArticlePageInterfaces'
import ArticleImageSection from './ArticleContent/ImageSection/ArticleImageSection'
import ContentMiscInfo from './ArticleContent/ContentMisc/ContentMiscInfo'
import TitleAndHeader from './ArticleContent/TitleAndHeader'
import TableOfContents from './ArticleContent/TableOfContents'
import TextParagraph from './ArticleContent/TextParagraph'
import FinalSection from './ArticleContent/FinalSection'

const ARTICLE_PAGE = () => {
    window.scrollTo(0, 0)

    const [article, setArticle] = React.useState<StateLoadingHook<StateType>>(defaultStateLoadHook),
          n: NavigateFunction = useNavigate(),
          loc: Location = useLocation(),
          {id} = useParams()


    React.useEffect(() => {
        setArticle(defaultStateLoadHook)

        const init = async () => {
            await fetchFunction<StateType>(
                {url: `${process.env.REACT_APP_API_ARTICLE_PAGE}/${id}`, type: 'GET'},
                {position: 'fixed', appendTo: document.body},

                data => {
                    setArticle({
                        finished: true,
                        data
                    })
                },

                err => {
                    n('/error', {
                        state: Fetches.returnFetchErrorState(err),
                        replace: true
                    })
                }
            )
        }
        init()
    }, [loc])
    
    if(article.finished && article.data) {
        const {main, regularArticles, relatedArticles} = article.data

        const {tags, mainImg, text, posted, header, title, additionalImgs, comments, _id} = main

        return (
            <LayoutWrap>
    
                <main className="article-page">

                    <div className="wrapper">

                        <article className="content">

                            <ArticleImageSection tags={tags} image={mainImg.url} />

                            <ContentMiscInfo postedDate={posted} textLen={text.length} />

                            <TitleAndHeader header={header} title={title} />

                            <TableOfContents text={text} />

                            <TextParagraph text={text} images={additionalImgs.map(x => x.url)} />

                        </article>

                        <ArticleAside id={main._id} relatedArticles={relatedArticles} likes={main.likes} postedDate={main.posted} />

                    </div>

                    <FinalSection id={_id} regularArticles={regularArticles} comments={comments} />
    
                    {/* <ArticleContent regularArticles={regularArticles} main={main} />
                    <ArticleAside id={main._id} relatedArticles={relatedArticles} likes={main.likes} postedDate={main.posted} /> */}
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}

export default ARTICLE_PAGE