import { ImageType } from "./CommonInterfaces"

export default interface ArticleType {
    _id: string
    
    title: string
    header: string

    tags: string[]

    category: string
    subcategory: string

    posted: number

    likes: RateType
    views: number

    text: string

    comments: CommentType[]

    mainImg: ImageType
    additionalImgs: ImageType[]
}

export interface CommentType {
    authorName: string
    authorAvatar: string
    postedDate: number
    text: string
}

export interface RateType {
    num: number
    whoRated: string[]
}