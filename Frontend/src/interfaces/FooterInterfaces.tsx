export interface ILinksListComponent {
    list: ILinksList[][]
}

export interface ILinksList {
    text: string
    url: string
    cname?: string
}