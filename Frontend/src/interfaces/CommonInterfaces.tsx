export interface IChildren<T = string> {
    children: T
}

export interface INavigateLinks {
    text: string
    url: string
    cname?: string
}

export interface IKeyValue {
    keyStr: string
    value: string | number
}

export interface IAnyObject {
    [key: string]: string | number
}

export interface ImageType {
    url: string
    filename: string
}

export interface StateLoadingHook<T = any> {
    finished: boolean
    data: T | null
    error?: string
}
export const defaultStateLoadHook = {
    finished: false,
    data: null
}

export interface ILinksList {
    text: string
    url: string
    icon?: JSX.Element
    cname?: string
}
