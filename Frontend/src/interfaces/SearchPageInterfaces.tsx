export default interface ISearchedArticle {
    _id: string
    title: string
    posted: number
    likes: number
    image: string
    tags: string[]
    category: string
}

export interface IImageContainer {
    image: string
    tags: string[]
}