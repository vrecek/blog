export interface IProfileAside {
    contentSet: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export interface IProfileAsideList {
    component: JSX.Element
    text: string
    cname?: string
}

export interface IProfileInfoDiv {
    keyName: string
    value: string | number
    cname?: string
}

export interface ITextInfo {
    header: string,
    text: string
}