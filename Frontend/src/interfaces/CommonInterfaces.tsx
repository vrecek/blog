export interface IChildren<T = string> {
    children: T
}

export interface INavigateLinks {
    text: string
    url: string
    cname?: string
}

export interface IKeyValue {
    keyStr: string,
    value: string | number
}