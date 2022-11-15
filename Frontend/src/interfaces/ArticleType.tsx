export default interface ArticleType {
    title: string
    header: string
    text: string
    tags: string[]
    views: number
    likes: number
    postDate: number
    mainImage: SchemaImageType
    additionalImages: SchemaImageType[]
    category: string
    subcategory: string
    comments: ArticleCommentType
    _id: string
}

export interface SchemaImageType {
    url: string,
    filename: string
}

export interface ArticleCommentType {
    authorId: string
    postDate: number
    text: string
}