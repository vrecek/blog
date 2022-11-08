export interface ISliderButtons {
    sliderRef: React.RefObject<HTMLDivElement>
    slidersCount: number
}

// SLIDER SECTION

export interface ISlide extends IPopularText {
    image: string
    id: string
}

export interface IPopularText {
    header: string
    para: string
}

//---------------------------------------------------------

// ARTICLES SECTION

export interface IHomepageArticle extends IRateAndDate {
    id: string
    category: string
    title: string
    image: string
    cname?: 'big' | 'small'
    para?: string
}

export interface IRateAndDate {
    rate: number
    date: number
}

export interface IArticleContainer {
    articles: IHomepageArticle[]
    cname: string
}

//---------------------------------------------------------