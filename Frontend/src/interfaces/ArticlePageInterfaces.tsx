import ArticleType, { CommentType, RateType } from "./ArticleType";
import { IChildren } from "./CommonInterfaces";
import { ILinksList } from "./CommonInterfaces";
import { IHomepageArticle } from "./HomepageInterfaces";

export interface IRelatedArticles {  
    relatedArticles: ILinksList[]
}
export interface IRegularArticles {
    regularArticles: IHomepageArticle[]
}
export interface IMain {
    main: ArticleType
}

//////////

export interface StateType extends IRelatedArticles, IRegularArticles, IMain {}



export interface IArticleContent extends IRegularArticles, IMain {}

export interface IArticleAside extends IRelatedArticles {
    likes: RateType
    id: string
    postedDate: number
}

//////////


// Main contents

export interface AISection extends ITags {
    image: string
}

export interface ITags {
    tags: string[]
}

export interface IReadTime {
    textLen: number
}

export interface IDateString {
    postedDate: number
}

export interface IMiscInformations extends IReadTime, IDateString {}

export interface ITextParagraph {
    text: string
    images: string[]
}

//////////

export interface IFinalSection extends ICommentsContainer {
    regularArticles: IHomepageArticle[]
    id: string
}

export interface ICommentsContainer {
    comments: CommentType[]
    id: string
}

export interface ICommentsInfo extends IChildren<(string|number)[]> {
    cname: string
}

export interface ITitleHeader {
    title: string
    header: string
}

export interface ILikes {
    id: string
    details: RateType
}

export interface ITableContents {
    text: string
    dd: any
}