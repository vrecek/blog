import { RateType } from "./ArticleType"

export interface ISliderButtons {
    sliderRef: React.RefObject<HTMLDivElement>
    slidersCount: number
}

export interface IImageAndUrl {
    mainImg: { url: string }
    _id: string
}

export interface ISlide extends IPopularText, IImageAndUrl {}

export interface ILatestMisc {
    posted: number
    category: string
}

export interface ILatest extends IImageAndUrl, ILatestMisc {
    title: string
}

export interface ILatestText extends ILatestMisc {
    title: string
}

export interface IPopularText {
    header: string
    title: string
}

export interface IHeaderTile extends ITileEntry, ITileArrow {
}

export interface ITileArrow {
    url?: string
}

export interface ITileEntry {
    text: string
    icon: JSX.Element
}

//---------------------------------------------------------

// ARTICLES SECTION

export interface IHomepageArticle extends IRateAndDate {
    _id: string
    category: string
    title: string
    image: string
    cname?: 'big' | 'small'
    text?: string
}

export interface IRateAndDate {
    likes: RateType
    posted: number
}

export interface IArticleContainer {
    articles: IHomepageArticle[]
    cname: string
    category?: ICategoryObject
}

export interface ICategoryObject {
    name: string
    url: string
}

//---------------------------------------------------------

// STATE

export interface IHomepageState extends IEntryARticles {
    random: IHomepageArticle[]
    tutorials: IHomepageArticle[]
    news: IHomepageArticle[]
}

export interface IEntryARticles {
    popular: ISlide[]
    latest: ILatest[]
}